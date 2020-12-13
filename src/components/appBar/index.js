import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import {availableLanguages, defaultLang, langCookieName} from 'services/constant/format'
import Cookie from 'js-cookie'
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  root: {
		flexGrow: 1,
		color: 'white'
  },
  title: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 135,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
	const handleChangeLang = lang => {
		Cookie.set(langCookieName, lang)
		window.location.reload()
	}
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="primary">
						{t("app_name")}
          </Typography>
          <FormControl variant="outlined" color="primary" size="small" className={classes.formControl}>
						<InputLabel id="demo-simple-select-outlined-label">{t("select_language")}</InputLabel>
						<Select
							labelId="demo-simple-select-outlined-label"
							id="demo-simple-select-outlined"
							value={defaultLang}
							onChange={e => handleChangeLang(e.target.value)}
							label={t("select_language")}
							style={{backgroundColor: 'white'}}
						>
							{
								availableLanguages.map(item => (
									<MenuItem value={item} key={item}>
										<em>{item}</em>
									</MenuItem>
								))
							}
						</Select>
					</FormControl>
        </Toolbar>
      </AppBar>
    </div>
  );
}
