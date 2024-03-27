import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/admin-pages/dashboard/dashboard.component";
import { AdminProfileComponent } from "../../pages/admin-pages/admin-profile/admin-profile.component";

import { HumanResourcesManagementComponent } from "../../pages/admin-pages/human-resources-management/human-resources-management.component";
import { WarehouseManagementComponent } from "../../pages/admin-pages/warehouse-management/warehouse-management.component";
import { InventoryManagementComponent } from "../../pages/admin-pages/inventory-management/inventory-management.component";
import { OrderManagementComponent } from "../../pages/admin-pages/order-management/order-management.component";
import { SupplyChainManagementComponent } from "../../pages/admin-pages/supply-chain-management/supply-chain-management.component";
import { AuthguardGuard } from "src/app/auth/authguard.guard";
import { TimeAttendanceComponent } from "src/app/pages/employee-pages/time-attendance/time-attendance.component";
import { PersonalComponent } from "src/app/pages/employee-pages/personal/personal.component";
import { AdminGuard } from "src/app/auth/admin.guard";
import { NewEmployeeComponent } from "src/app/pages/admin-pages/human-resources-management/new-employee/new-employee.component";
import { EmployeeDetailsComponent } from "src/app/pages/admin-pages/employee-details/employee-details/employee-details.component";
import { AllEmployeesComponent } from "src/app/pages/admin-pages/employee-details/all-employees/all-employees.component";
import { UpdateEmployeeComponent } from "src/app/pages/admin-pages/employee-details/update-employee/update-employee.component";
import { HeadOfWarehouseManagerComponent } from "src/app/pages/manager-pages/head-of-warehouse-manager/head-of-warehouse-manager.component";
import { Warehouse1Component } from "src/app/pages/manager-pages/warehouse1/warehouse1/warehouse1.component";
import { Warehouse3Component } from "src/app/pages/manager-pages/warehouse3/warehouse3/warehouse3.component";
import { Warehouse2Component } from "src/app/pages/manager-pages/warehouse2/warehouse2/warehouse2.component";
import { UpdateProductComponent } from "src/app/pages/manager-pages/update-product/update-product.component";
import { AddProductComponent } from "src/app/pages/manager-pages/add-product/add-product.component";
import { FormToFillComponent } from "src/app/pages/employee-pages/form-to-fill/form-to-fill.component";
import { LeaveFormComponent } from "src/app/pages/employee-pages/form-to-fill/leave-form/leave-form.component";
import { ApprovalleaveformComponent } from "src/app/pages/manager-pages/approval-leave-form/approvalleaveform/approvalleaveform.component";
import { NotificationComponent } from "src/app/pages/admin-pages/notification/notification/notification.component";
import { LeaveDetailsEmployeeComponent } from "src/app/pages/admin-pages/employee-leave-Details/leave-details-employee/leave-details-employee.component";
import { AllNotificationComponent } from "src/app/pages/admin-pages/all-notification/all-notification.component";
import { AllRequestComponent } from "src/app/pages/admin-pages/employee-leave-Details/leave-all-request/all-request/all-request.component";
import { AcceptedRequestComponent } from "src/app/pages/admin-pages/employee-leave-Details/leave-accepted-request/accepted-request/accepted-request.component";
import { RejectedRequestComponent } from "src/app/pages/admin-pages/employee-leave-Details/leave-reject-request/rejected-request/rejected-request.component";
import { OvertimeNotificationComponent } from "src/app/pages/admin-pages/all-notification/overtime-notification/overtime-notification/overtime-notification.component";
import { UpdateOvertimeComponent } from "src/app/pages/admin-pages/all-notification/update-overtime/update-overtime/update-overtime.component";
import { EmpPayrollComponent } from "src/app/pages/employee-pages/emp_payroll/emp-payroll/emp-payroll.component";
import { HrNotificationComponent } from "src/app/pages/hr-pages/hr_notification/hr-notification/hr-notification.component";
import { AllLeaveNotificationHrComponent } from "src/app/pages/hr-pages/hr_notification/employees_leave/all-leave-notification-hr/all-leave-notification-hr/all-leave-notification-hr.component";
import { PendingLeaveNotificationHrComponent } from "src/app/pages/hr-pages/hr_notification/employees_leave/pending-leave-notification_hr/pending-leave-notification-hr/pending-leave-notification-hr.component";
import { AcceptedLeaveNotificationHrComponent } from "src/app/pages/hr-pages/hr_notification/employees_leave/accepted-leave-notification_hr/accepted-leave-notification-hr/accepted-leave-notification-hr.component";
import { RejectedLeaveNotificationHrComponent } from "src/app/pages/hr-pages/hr_notification/employees_leave/rejected-leave-notification_hr/rejected-leave-notification-hr/rejected-leave-notification-hr.component";
import { AllOvertimeNotificationHrComponent } from "src/app/pages/hr-pages/hr_notification/employees-overtime/rejected-all-notification_hr/all-overtime-notification-hr/all-overtime-notification-hr.component";
import { PendingOvertimeNotificationHrComponent } from "src/app/pages/hr-pages/hr_notification/employees-overtime/pending-all-notification_hr/pending-overtime-notification-hr/pending-overtime-notification-hr.component";
import { AcceptedOvertimeNotificationHrComponent } from "src/app/pages/hr-pages/hr_notification/employees-overtime/rejected-accepted-notification_hr/accepted-overtime-notification-hr/accepted-overtime-notification-hr.component";
import { RejectedOvertimeNotificationHrComponent } from "src/app/pages/hr-pages/hr_notification/employees-overtime/rejected-overtime-notification_hr/rejected-overtime-notification-hr/rejected-overtime-notification-hr.component";
import { PayrollProcessingComponent } from "src/app/pages/admin-pages/human-resources-management/payroll-processing/payroll-processing/payroll-processing.component";
import { EmployeeDetailsPayrollComponent } from "src/app/pages/admin-pages/human-resources-management/payroll-processing/employee-details-payroll/employee-details-payroll/employee-details-payroll.component";
import { LeaveModuleComponent } from "src/app/pages/employee-pages/leave-module/leave-module/leave-module.component";
import { ComplaintFormComponent } from "src/app/pages/employee-pages/complaint-form/complaint-form/complaint-form.component";
import { FormsComponent } from "src/app/pages/admin-pages/forms/forms/forms.component";
import { TypeOfLeaveComponent } from "src/app/pages/admin-pages/forms/type-of-leave/type-of-leave/type-of-leave.component";
import { SettingComponent } from "src/app/pages/admin-pages/setting/setting/setting.component";
import { LevelTypeFormComponent } from "src/app/pages/admin-pages/forms/level-type-form/level-type-form/level-type-form.component";
import { AddDesignationFormComponent } from "src/app/pages/admin-pages/forms/add-designation-form/add-designation-form/add-designation-form.component";
import { AddDutiesComponent } from "src/app/pages/admin-pages/forms/add-duties/add-duties/add-duties.component";

import { AddTaskComponent } from "src/app/pages/admin-pages/forms/add-task/add-task/add-task.component";
import { AcademicCalenderComponent } from "src/app/pages/admin-pages/academic-calender/academic-calender/academic-calender.component";
import { AddAcademicCalenderComponent } from "src/app/pages/admin-pages/academic-calender/add-academic-calender/add-academic-calender/add-academic-calender.component";
import { CommanDasboardComponent } from "src/app/pages/comman-dasboard/comman-dasboard/comman-dasboard.component";
import { UserProfileComponent } from "src/app/user-profile/user-profile/user-profile.component";
import { AddLocationComponent } from "src/app/pages/admin-pages/forms/add-location/add-location/add-location.component";
import { LeaveApproverComponent } from "src/app/pages/admin-pages/forms/leave-approver/leave-approver/leave-approver.component";
import { AddSubDutiesComponent } from "src/app/pages/admin-pages/forms/add-sub-duties/add-sub-duties/add-sub-duties.component";
import { AddAdditionalTaskComponent } from "src/app/pages/admin-pages/forms/add-aditional-task/add-additional-task/add-additional-task.component";
import { LeaveCalenderComponent } from "src/app/pages/admin-pages/academic-calender/leave-calender/leave-calender/leave-calender.component";
import { SearchEmployeeLeaveByMonthComponent } from "src/app/pages/admin-pages/academic-calender/search-employee-leave-by-month/search-employee-leave-by-month/search-employee-leave-by-month.component";
import { EmployeesLeaveDetailsByDateComponent } from "src/app/pages/admin-pages/academic-calender/employees-leave-details-by-date/employees-leave-details-by-date/employees-leave-details-by-date.component";
import { EmployeeLeaveDetailsByYearComponent } from "src/app/pages/admin-pages/academic-calender/employee-leave-details-by-year/employee-leave-details-by-year/employee-leave-details-by-year.component";
import { GetAllEmployeeLeaveComponent } from "src/app/pages/approver-leave/getAllEmployeeLeave/get-all-employee-leave/get-all-employee-leave.component";
import { SecondApproverLeaveUpdateFormComponent } from "src/app/pages/approver-leave/second-approver-leave_Update-form/second-approver-leave-update-form/second-approver-leave-update-form.component";
import { AddDepartmentComponent } from "src/app/pages/admin-pages/forms/add-department/add-department/add-department.component";
import { UpdateDepartmentComponent } from "src/app/pages/admin-pages/forms/update-department/update-department/update-department.component";
import { UpdateLevelComponent } from "src/app/pages/admin-pages/forms/update-level/update-level/update-level.component";
import { UpdateDesignationComponent } from "src/app/pages/admin-pages/forms/update-designation/update-designation/update-designation.component";
import { UpdateDutyComponent } from "src/app/pages/admin-pages/forms/update-duty/update-duty/update-duty.component";
import { UpdateSubDutyComponent } from "src/app/pages/admin-pages/forms/update-sub-duty/update-sub-duty/update-sub-duty.component";
import { UpdateTaskComponent } from "src/app/pages/admin-pages/forms/update-task/update-task/update-task.component";
import { OwnLeaveDetailsComponent } from "src/app/pages/employee-pages/own-leave-details/own-leave-details/own-leave-details.component";
import { UpdateLeaveApproverComponent } from "src/app/pages/admin-pages/forms/update-leave-approver/update-leave-approver/update-leave-approver.component";
import { GetAdditionalTaskbyTaskIdComponent } from "src/app/pages/admin-pages/forms/get-additional-taskbyTaskId/get-additional-taskby-task-id/get-additional-taskby-task-id.component";
import { GetAcademicCalenderComponent } from "src/app/pages/admin-pages/academic-calender/getAcademic-Calender/get-academic-calender/get-academic-calender.component";
import { AddShiftComponent } from "src/app/pages/admin-pages/forms/add-shift/add-shift/add-shift.component";
import { UpdateShiftComponent } from "src/app/pages/admin-pages/forms/update-shift/update-shift/update-shift.component";
import { GetFullDetailsComponent } from "src/app/pages/employee-pages/get-full-details/get-full-details/get-full-details.component";
import { GetEmpAttendanceByYearComponent } from "src/app/pages/admin-pages/academic-calender/get-emp-attendance-by-year/get-emp-attendance-by-year/get-emp-attendance-by-year.component";
import { GetEmpAttendanceByMonthComponent } from "src/app/pages/admin-pages/academic-calender/get-emp-attendance-by-month/get-emp-attendance-by-month/get-emp-attendance-by-month.component";
import { UpdateLocationComponent } from "src/app/pages/admin-pages/forms/update-location/update-location/update-location.component";
import { LeaveComponent } from "src/app/pages/admin-pages/leave/leave/leave.component";
import { ApprovedByFirstComponent } from "src/app/pages/admin-pages/leave/aprroved-By-First/approved-by-first/approved-by-first.component";
import { ApprovedBySecondComponent } from "src/app/pages/admin-pages/leave/aprroved-By-second/approved-by-second/approved-by-second.component";
import { YearlyHolidaysComponent } from "src/app/pages/admin-pages/academic-calender/yearly-holidays/yearly-holidays/yearly-holidays.component";
import { ShiftAssignComponent } from "src/app/pages/admin-pages/forms/shift-assign/shift-assign/shift-assign.component";
import { UpdateAssignShiftComponent } from "src/app/pages/admin-pages/forms/update-assign-shift/update-assign-shift/update-assign-shift.component";
import { StaffLeaveMonitoringComponent } from "src/app/pages/admin-pages/academic-calender/staff-leave-monitoring/staff-leave-monitoring/staff-leave-monitoring.component";
import { AllEmployeeForshiftAssignComponent } from "src/app/pages/admin-pages/forms/forms/all-employee-forshift-assign/all-employee-forshift-assign/all-employee-forshift-assign.component";
// import { AddAcademicCalenderComponent } from "src/app/pages/admin-pages/add-academic-calender/add-academic-calender/add-academic-calender.component";

export const AdminLayoutRoutes: Routes = [
  // ADMIN PAGES
  {
    path:"user-profile",
    component: UserProfileComponent
  },
  {
    path:"comman-dasboard",
    component: CommanDasboardComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path: "human-resources-management",
    component: HumanResourcesManagementComponent,
    canActivate: [AuthguardGuard],
    children: [
      {
        path: "new-employee",
        component: NewEmployeeComponent,
        canActivate: [AuthguardGuard],
      },
      {
        path:'payroll-process',
        component:PayrollProcessingComponent,
        canActivate:[AuthguardGuard],
      }
    ],
  },
  {
    path:'Payroll-Processing',
    component:PayrollProcessingComponent,
    canActivate:[AuthguardGuard],
  },
  {
    path:"employee-details-payroll/:id",
    component:EmployeeDetailsPayrollComponent
  },
  {
    path: "warehouse-management",
    component: WarehouseManagementComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path: "inventory-management",
    component: HeadOfWarehouseManagerComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path: "order-management",
    component: OrderManagementComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path: "supply-chain-management",
    component: SupplyChainManagementComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path: "admin-profile",
    component: AdminProfileComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path: "all-employees",
    component: AllEmployeesComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path: "employee-details/:id",
    component: EmployeeDetailsComponent,
    canActivate:[AuthguardGuard]
    
  },
  {
    path: "get-fullemployee-details/:id",
    component: GetFullDetailsComponent,
    canActivate:[AuthguardGuard]
    
  },
  {
    path: "update-employee/:email",
    component: UpdateEmployeeComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path: "notifications",
    component: NotificationComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path:"all-notifications",
    component: AllNotificationComponent
  },
  {
    path:"all-notifications-for-leave",
    component:AllRequestComponent,
  },
  {
    path:"overtime-request",
    component:OvertimeNotificationComponent
  },
  {
    path:"update-overtime/:id",
    component:UpdateOvertimeComponent
  },
  {
    path:'leave-accepted-request',
    component:AcceptedRequestComponent
  },
  {
    path:"leave-rejected-request",
    component:RejectedRequestComponent
  },
  {
    path: "employee-leave-details/:id",
    component: LeaveDetailsEmployeeComponent,
  },
  {
    path: "approval-leave-form/:id",
    component: ApprovalleaveformComponent,
  },
  {
    path:"forms",
    component:FormsComponent,
    canActivate: [AuthguardGuard],
    children: [
      {
        path:"shift-assign",
        component:ShiftAssignComponent
      },
      {
        path:"all-employee-shift",
        component:AllEmployeeForshiftAssignComponent
      },
      {
        path:"add-academic-calendar",
        component:AddAcademicCalenderComponent
      },
      {
        path: "add-shift",
        component: AddShiftComponent,
        canActivate: [AuthguardGuard],
      },
      {
        path: "update-shift-assign/:id",
        component: UpdateAssignShiftComponent,
        canActivate: [AuthguardGuard],
      },


      {
        path: "update-shift/:shiftId/:shiftName/:shiftStartTime/:shiftEndTime",
        component: UpdateShiftComponent,
        canActivate: [AuthguardGuard],
      },
      {
        path: "type-of-leave",
        component: TypeOfLeaveComponent,
        canActivate: [AuthguardGuard],
      },
      {
        path: "add-department",
        component: AddDepartmentComponent,
        canActivate: [AuthguardGuard],
      },
      {
        path:"update-department/:id",
        component:UpdateDepartmentComponent
      },
      {
        path:"update-Level/:id",
        component:UpdateLevelComponent
      },
      {
        path:"update-designation/:id",
        component:UpdateDesignationComponent
      },
      {
        path:"update-duty/:id",
        component:UpdateDutyComponent
      },
      {
        path:"update-sub-duty/:id",
        component:UpdateSubDutyComponent
      },
      {
        path:"update-task/:id",
        component:UpdateTaskComponent
      },
      {
        path: "update-LeaveApprover/:id1/:id2/:id3/:id4/:laid",
        component: UpdateLeaveApproverComponent
      },
      
      {
        path: "getAdditionTaskByTaskId/:id",
        component: GetAdditionalTaskbyTaskIdComponent
      },
      {
        path: "update-location/:id",
        component: UpdateLocationComponent
      },
      
      {
        path: "level-type",
        component: LevelTypeFormComponent,
        canActivate: [AuthguardGuard],
      },
      {
        path: "add-designation",
        component: AddDesignationFormComponent,
        canActivate: [AuthguardGuard],
      },
      {
        path: "add-tasks",
        component: AddTaskComponent,
        canActivate: [AuthguardGuard],
      },
      {
        path: "add-duties",
        component: AddDutiesComponent,
        canActivate: [AuthguardGuard],
      },
      {
        path: "add-location",
        component: AddLocationComponent,
        canActivate: [AuthguardGuard],
      },
      {
        path: "add-leave-approver",
        component: LeaveApproverComponent,
        canActivate: [AuthguardGuard],
      },
      {
        path: "add-sub-duties",
        component: AddSubDutiesComponent,
        canActivate: [AuthguardGuard],
      },
      {
        path: "add-additional-task",
        component: AddAdditionalTaskComponent,
        canActivate: [AuthguardGuard],
      },
      
    ],
  },
  {
    path:"setting",
    component:SettingComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path:"Academic-calender",
    // component:AddAcademicCalenderComponent,
    component:AcademicCalenderComponent,
    canActivate: [AuthguardGuard],

    children:[
      
      {
        path:"staff-leave-monitoring",
        component:StaffLeaveMonitoringComponent
      },
      {
        path:"yearly-holidays",
        component:YearlyHolidaysComponent
      },
      {
        path:"get-emp-attendance-by-year",
        component:GetEmpAttendanceByYearComponent
      },
      {
        path:"get-emp-attendance-by-month",
        component:GetEmpAttendanceByMonthComponent
      },
      {
        path:"get-academic-calendar",
        component:GetAcademicCalenderComponent
      },
      {
        path:"leave-calendar",
        component:LeaveCalenderComponent
      },
      {
        path:"search-employee-leave-bymonth",
        component:SearchEmployeeLeaveByMonthComponent
      },
      {
        path:"search-employees-leave-bydate",
        component:EmployeesLeaveDetailsByDateComponent
      },
      {
        path:"search-employee-leave-year",
        component:EmployeeLeaveDetailsByYearComponent
      },
    ]
    // children: [
    //   {
    //     path: "add-academic-calendar",
    //     component: TypeOfLeaveComponent,
    //     canActivate: [AuthguardGuard],
    //   },
    //   {
    //     path: "level-type",
    //     component: LevelTypeFormComponent,
    //     canActivate: [AuthguardGuard],
    //   },
    // ]
    
  },
  {
    path:"admin-leaves",
    // component:AddAcademicCalenderComponent,
    component:LeaveComponent,
    canActivate: [AuthguardGuard],

    children:[
      
      {
        path:"approved-by-first",
        component:NotificationComponent
      },
      {
        path:"approved-by-second",
        component:GetAllEmployeeLeaveComponent
      },
      // {
      //   path:"get-academic-calendar",
      //   component:GetAcademicCalenderComponent
      // },
      // {
      //   path:"leave-calendar",
      //   component:LeaveCalenderComponent
      // },
      // {
      //   path:"search-employee-leave-bymonth",
      //   component:SearchEmployeeLeaveByMonthComponent
      // },
      // {
      //   path:"search-employees-leave-bydate",
      //   component:EmployeesLeaveDetailsByDateComponent
      // },
      // {
      //   path:"search-employee-leave-year",
      //   component:EmployeeLeaveDetailsByYearComponent
      // },
    ]
    // children: [
    //   {
    //     path: "add-academic-calendar",
    //     component: TypeOfLeaveComponent,
    //     canActivate: [AuthguardGuard],
    //   },
    //   {
    //     path: "level-type",
    //     component: LevelTypeFormComponent,
    //     canActivate: [AuthguardGuard],
    //   },
    // ]
    
  },
//hr pages

{
path:"hr_all-notification",
component:HrNotificationComponent
},
//LEAVE NOTIFICATION
{
path:"hr_all_leave_request",
component:AllLeaveNotificationHrComponent
},
//own leave details



{
path:"own-leave-details-byDate",
component:OwnLeaveDetailsComponent
},
{
path:"hr_pending_leave_request",
component:PendingLeaveNotificationHrComponent
},
{
  path:"hr_accepted_leave_request",
  component:AcceptedLeaveNotificationHrComponent
},{
  path:"hr_rejected_leave_request",
  component:RejectedLeaveNotificationHrComponent
},
//  OverTime Notification
{
  path:"hr_all_overTime_request",
  component:AllOvertimeNotificationHrComponent
},
{
  path:"hr_pending_overTime_request",
  component:PendingOvertimeNotificationHrComponent
},{
  path:"hr_accepted_overTime_request",
  component:AcceptedOvertimeNotificationHrComponent
},
{
path:"hr_rejected_overTime_request",
component:RejectedOvertimeNotificationHrComponent
},




  
  // Manager
  {
    path: "headOfManager",
    component: HeadOfWarehouseManagerComponent,
  },
  {
    path: "warehouse1",
    component: Warehouse1Component,
  },
  {
    path: "warehouse2",
    component: Warehouse2Component,
  },
  {
    path: "warehouse3",
    component: Warehouse3Component,
  },
  {
    path: "update-product",
    component: UpdateProductComponent,
  },
  {
    path: "add-product",
    component: AddProductComponent,
  },
  {
    path: "leave-update/:id",
    component: ApprovalleaveformComponent,
  },
  // EMPLOYEE PAGES
  {
    path: "personal",
    component: PersonalComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path: "form-to-fill",
    component:FormToFillComponent,
    // canActivate: [AuthguardGuard],
    children: [
      {
        path: "leaveform",
        component: LeaveFormComponent,
        // canActivate: [AuthguardGuard],
      },
      {
        path:"complaint-form",
        component:ComplaintFormComponent
      }
    ],
  },
  
  {
    path: "time-off",
    component: TimeAttendanceComponent,
    canActivate: [AuthguardGuard],
  },{
    path:"emp_payroll",
    component:EmpPayrollComponent
  },
  {
    path:"leave-module",
    component:LeaveModuleComponent
  },






  //dynamic Routings
  {
    path: "employee-oboard",
   component: HumanResourcesManagementComponent,
    
    // canActivate: [AuthguardGuard],
    children: [
      {
        path: "employee_account",
        component:NewEmployeeComponent ,
        // canActivate: [AuthguardGuard],
      },
      {
        path:"complaint-form",
        component:ComplaintFormComponent
      }
    ],
  },

  {
    path:"leaveapprover",
    component:GetAllEmployeeLeaveComponent
  },{
    path:"getEmployeeLeaveUpdateFormBySecondApprover/:id",
    component:SecondApproverLeaveUpdateFormComponent
  }




  ////hr routes Dynamic


,
{
  path: "employee-onboard",
  component: HumanResourcesManagementComponent,
  canActivate: [AuthguardGuard],
  children: [
    {
      path: "create-employee",
      component: NewEmployeeComponent,
      canActivate: [AuthguardGuard],
    },
    // {
    //   path:'payroll-process',
    //   component:PayrollProcessingComponent,
    //   canActivate:[AuthguardGuard],
    // }
  ],
},
{
  path: "employee-profile",
  component: AllEmployeesComponent,
  canActivate: [AuthguardGuard],
},
{
  path:"leave-management",
  // component:AddAcademicCalenderComponent,
  component:AcademicCalenderComponent,
  canActivate: [AuthguardGuard],

  children:[
    // {
    //   path:"add-academic-calendar",
    //   component:AddAcademicCalenderComponent
    // },
    // {
    //   path:"get-academic-calendar",
    //   component:GetAcademicCalenderComponent
    // },
    {
      path:"leave-calender",
      component:LeaveCalenderComponent
    },
    {
      path:"employee-leaves-on-month",
      component:SearchEmployeeLeaveByMonthComponent
    },
    {
      path:"all-employees-on-particular-date",
      component:EmployeesLeaveDetailsByDateComponent
    },
    {
      path:"employee-leaves-on-year",
      component:EmployeeLeaveDetailsByYearComponent
    },
  ]
  // children: [
  //   {
  //     path: "add-academic-calendar",
  //     component: TypeOfLeaveComponent,
  //     canActivate: [AuthguardGuard],
  //   },
  //   {
  //     path: "level-type",
  //     component: LevelTypeFormComponent,
  //     canActivate: [AuthguardGuard],
  //   },
  // ]
  
},

  
];


