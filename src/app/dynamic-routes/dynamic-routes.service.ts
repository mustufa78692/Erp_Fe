import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DynamicRoutesService {

  
  public camelCaseNames = [];

  convertToCamelCase(str: string): string {
    console.log("inside camelCaseConverter", str);
  
    return str
      .split(/[\s-_]+/)
      .map((word, index) => index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('');
  }
  
  public addLabelProperty(obj: any) {
    // console.log(typeof(obj.dutyName))
    if (obj.hasOwnProperty('dutyName')) {
      const camelCaseName = this.convertToCamelCase(obj.dutyName);
      obj.label = camelCaseName;
      if (!this.camelCaseNames) {
        this.camelCaseNames = [];
      }
      this.camelCaseNames.push(camelCaseName);
    }
    
    // if (obj.hasOwnProperty('subDutyName')) {
    //   const camelCaseName = this.convertToCamelCase(obj.dutyName);
    //   obj.label = camelCaseName;
    //   if (!this.camelCaseNames) {
    //     this.camelCaseNames = [];
    //   }
    //   this.camelCaseNames.push(camelCaseName);
    // }

  
    // Recursively call this function for nested arrays
    for (let key in obj) {
      if (Array.isArray(obj[key])) {
        obj[key].forEach((element: any) => this.addLabelProperty(element));
      }
    }
  }
  
  public getResponseFromServer(){
    try {
      let sidePanelDataString = localStorage.getItem("currentDesignationAndTask");
      console.log(sidePanelDataString);
      let sidePanelData = JSON.parse(sidePanelDataString || '[]');
      console.log(sidePanelData[0]?.designation);
      let dutiesData: any[] = [];
  
      if(sidePanelData && sidePanelData.length && sidePanelData[0]?.designation?.length) {
        sidePanelData[0].designation.forEach((item: any) => {
          item.duties.forEach((duty: any) => this.addLabelProperty(duty));
        });
      }
  
      console.log(sidePanelData);
    } catch (error) {
      console.error('Error processing data', error);
    }
  }
  
  
  //  convertToCamelCase(str:any) {
  //   console.log("inside camplecaseconverter",str);

  //     return str
  //       .split(/[\s-_]+/)
  //       .map((word, index) => index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  //       .join('');
  //   }
    
  //   public addLabelProperty(obj) {
  //     // if (obj.hasOwnProperty('designationName')) {
  //     //   const camelCaseName = this.convertToCamelCase(obj.designationName);
  //     //   obj.label = camelCaseName;
  //     //   this.camelCaseNames.push(camelCaseName);
  //     // }
  //     // dutyName
  //     console.log(typeof(obj.dutyName))
  //     if (obj.hasOwnProperty('dutyName')) {
  //       const camelCaseName = this.convertToCamelCase(obj.dutyName);
  //       obj.label = camelCaseName;
  //       this.camelCaseNames.push(camelCaseName);
  //     }
  //     // if (obj.hasOwnProperty('subDutyName')) {
  //     //   const camelCaseName = this.convertToCamelCase(obj.subDutyName);
  //     //   obj.label = camelCaseName;
  //     //   this.camelCaseNames.push(camelCaseName);
  //     // }
  //     // if (obj.hasOwnProperty('taskName')) {
  //     //   const camelCaseName = this.convertToCamelCase(obj.taskName);
  //     //   obj.label = camelCaseName;
  //     //   this.camelCaseNames.push(camelCaseName);
  //     // }
    
  //     // Recursively call this function for nested arrays
  //     for (let key in obj) {
  //       if (obj[key] instanceof Array) {
  //         obj[key].forEach(this.addLabelProperty);
  //       }
  //     }
  //   }
    
    
  //   //fetch api response
  //   public getResponseFromServer(){
  //     let sidePanelData:any=localStorage.getItem("currentDesignationAndTask")
  //     console.log(sidePanelData);
  //     sidePanelData=JSON.parse(sidePanelData);
  //     console.log(sidePanelData[0].designation);
  //     let dutiesData:any=[];

  //     if(sidePanelData && sidePanelData.length && sidePanelData[0].designation.length){
  //       sidePanelData[0].designation.forEach((item:any) => {
  //         item.duties.forEach(this.addLabelProperty)
  //       })
  //     }
  // //     console.log(sidePanelData.length,sidePanelData,sidePanelData[0].currentDesignationAndTask.length);
  // //     if(sidePanelData && sidePanelData.length && sidePanelData[0].currentDesignationAndTask.length ){
  // //         sidePanelData.currentDesignationAndTask.forEach((item:any) => {
  // //             item.designation.forEach(this.addLabelProperty);
  // //           });
  // //     }
  // console.log(sidePanelData)
  //   }
  
  }
  