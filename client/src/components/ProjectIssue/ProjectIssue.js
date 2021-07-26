import './ProjectIssue.css'
import React, { useEffect, useState } from 'react';
// ====================== Material UI cores ======================
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Icon from '@material-ui/core/Icon';
// ====================== API Calls ======================
import IssueDetail from '../IssueDetail'
import IssueAPI from '../../utils/IssueAPI'
// eslint-disable-next-line
import {
  Route,
  Link,
  useParams
} from "react-router-dom";
// ====================== RTF Draft WYSIWYG Editor ======================
import { stateToHTML } from 'draft-js-export-html';
import { convertFromRaw } from 'draft-js'


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginBottom: 12,
    borderLeft: '3px solid #cccccc',
    paddingBottom: 6,
  },
  projectissue: {
    paddingTop: 10,
    color: '#ccc',
  },
  title: {
    fontWeight: 500,
    fontSize:  15 ,
  },
  secondary: {
    fontSize: 11,
    textAlign: 'right',
  },
  priority: {
    fontSize: 13,
    textAlign: 'center',
    marginRight: 10,
    fontWeight: '800'
  },
  center: {
    flexDirection: "column",
    justifyContent: "center",
    verticalAlign: 'center',
  },
  body: {
    fontSize: 11,
    color: 'rgba(0,0,0,0.3)',
    marginLeft: 12,
  },
  gray: {
    color: ''
  }
});

const ProjectIssue = props => {
  const classes = useStyles();

  const obj = {
    Medium: "#f79d0c",
    High: "red",
    Low: "#14a7fc"
  }

  const convertFromJSONToHTML = (text) => {
    try {
      return { __html: stateToHTML(convertFromRaw(text)) }
    } catch (exp) {
      console.log(exp)
      return { __html: 'Error' }
    }
  }

  return (

    <Card className={classes.root} style={{ borderColor: obj[props.priority] }}>
      <CardContent className={classes.projectissue}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          className="issuecard"
        >
          <IssueDetail 
            author={props.author}
            project={props.project.title}
            pid={props.project._id}
          />

          <Grid item className="title" xs={12}>
            <Icon className={classes.priority} style={{ color: obj[props.priority] }} >radio_button_unchecked</Icon>

            {props.title} <i className="body"><div dangerouslySetInnerHTML={convertFromJSONToHTML(props.body)}> </div></i>
            

          </Grid>
        </Grid>
      </CardContent>
    </Card>

  )
}

export default ProjectIssue