import { Typography } from "@material-ui/core";
import React from "react";
import ScriptTag from 'react-script-tag';

export default function NovelistNewsletterWidget() {
  return (
      <div>
        <Typography gutterBottom variant={"subtitle2"}>
            QA Widget Bundle
        </Typography>
        <div class="novelist-widget-container" data-widgetId="1e5c35cf4cbd4f229b70c52c57e1d6d2" data-baseUrl="//novelistqa.ebscohost.com/4"></div> 
        <ScriptTag async type="text/javascript" src="//novelistqa.ebscohost.com/4/Widgets/ShowResponsiveWidget" />
        <Typography gutterBottom variant={"subtitle2"}>
            Local Widget Bundle
        </Typography>
        <div class="novelist-widget-container" data-widgetId="1e5c35cf-4cbd-4f22-9b70-c52c57e1d6d2" data-baseUrl="https://novelistqa.ebscohost.com/4"></div>
        <ScriptTag async type="text/javascript" src="C:\development\Repos\novelist.production.libraryaware-web\LibraryAware.Web\Resources\responsive_widget.js" />
      </div>
  );
}
