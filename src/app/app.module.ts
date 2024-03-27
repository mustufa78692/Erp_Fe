import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app.routing";
import { ComponentsModule } from "./components/components.module";
import { TokenInterceptorService } from "./services/token-interceptor.service";
import { TimeAttendanceComponent } from "./pages/employee-pages/time-attendance/time-attendance.component";
import { PersonalComponent } from "./pages/employee-pages/personal/personal.component";
import { ForgotPasswordComponent } from "./pages/auth-pages/forgot-password/forgot-password.component";
import { OnlyNumbersDirective } from "./directives/only-numbers.directive";
import { EmployeeDetailsComponent } from "./pages/admin-pages/employee-details/employee-details/employee-details.component";
import { AllEmployeesComponent } from "./pages/admin-pages/employee-details/all-employees/all-employees.component";
import { UpdateEmployeeComponent } from "./pages/admin-pages/employee-details/update-employee/update-employee.component";
import { HeadOfWarehouseManagerComponent } from './pages/manager-pages/head-of-warehouse-manager/head-of-warehouse-manager.component';
import { Warehouse1Component } from './pages/manager-pages/warehouse1/warehouse1/warehouse1.component';
import { Warehouse2Component } from './pages/manager-pages/warehouse2/warehouse2/warehouse2.component';
import { Warehouse3Component } from './pages/manager-pages/warehouse3/warehouse3/warehouse3.component';
import { UpdateProductComponent } from './pages/manager-pages/update-product/update-product.component';
import { AddProductComponent } from './pages/manager-pages/add-product/add-product.component';
// import { LeaveFormComponent } from './pages/employee-pages/leave-form/leave-form.component';
import { FormToFillComponent } from './pages/employee-pages/form-to-fill/form-to-fill.component';
import { ApprovalleaveformComponent } from './pages/manager-pages/approval-leave-form/approvalleaveform/approvalleaveform.component';
import { NotificationComponent } from './pages/admin-pages/notification/notification/notification.component';
import { LeaveDetailsEmployeeComponent } from './pages/admin-pages/employee-leave-Details/leave-details-employee/leave-details-employee.component';
import { AllNotificationComponent } from './pages/admin-pages/all-notification/all-notification.component';
import { RejectedRequestComponent } from './pages/admin-pages/employee-leave-Details/leave-reject-request/rejected-request/rejected-request.component';
import { AcceptedRequestComponent } from './pages/admin-pages/employee-leave-Details/leave-accepted-request/accepted-request/accepted-request.component';
import { AllRequestComponent } from './pages/admin-pages/employee-leave-Details/leave-all-request/all-request/all-request.component';
import { OvertimeNotificationComponent } from './pages/admin-pages/all-notification/overtime-notification/overtime-notification/overtime-notification.component';
import { UpdateOvertimeComponent } from './pages/admin-pages/all-notification/update-overtime/update-overtime/update-overtime.component';
import { EmpPayrollComponent } from './pages/employee-pages/emp_payroll/emp-payroll/emp-payroll.component';
import { HrNotificationComponent } from './pages/hr-pages/hr_notification/hr-notification/hr-notification.component';
import { AllLeaveNotificationHrComponent } from './pages/hr-pages/hr_notification/employees_leave/all-leave-notification-hr/all-leave-notification-hr/all-leave-notification-hr.component';
import { PendingLeaveNotificationHrComponent } from './pages/hr-pages/hr_notification/employees_leave/pending-leave-notification_hr/pending-leave-notification-hr/pending-leave-notification-hr.component';
import { AcceptedLeaveNotificationHrComponent } from './pages/hr-pages/hr_notification/employees_leave/accepted-leave-notification_hr/accepted-leave-notification-hr/accepted-leave-notification-hr.component';
import { RejectedLeaveNotificationHrComponent } from './pages/hr-pages/hr_notification/employees_leave/rejected-leave-notification_hr/rejected-leave-notification-hr/rejected-leave-notification-hr.component';
import { RejectedOvertimeNotificationHrComponent } from './pages/hr-pages/hr_notification/employees-overtime/rejected-overtime-notification_hr/rejected-overtime-notification-hr/rejected-overtime-notification-hr.component';
import { AcceptedOvertimeNotificationHrComponent } from './pages/hr-pages/hr_notification/employees-overtime/rejected-accepted-notification_hr/accepted-overtime-notification-hr/accepted-overtime-notification-hr.component';
import { AllOvertimeNotificationHrComponent } from './pages/hr-pages/hr_notification/employees-overtime/rejected-all-notification_hr/all-overtime-notification-hr/all-overtime-notification-hr.component';
import { PendingOvertimeNotificationHrComponent } from './pages/hr-pages/hr_notification/employees-overtime/pending-all-notification_hr/pending-overtime-notification-hr/pending-overtime-notification-hr.component';
import { SavePasswordComponent } from './pages/auth-pages/save-password/save-password.component';
import { PayrollProcessingComponent } from './pages/admin-pages/human-resources-management/payroll-processing/payroll-processing/payroll-processing.component';
import { EmployeeDetailsPayrollComponent } from './pages/admin-pages/human-resources-management/payroll-processing/employee-details-payroll/employee-details-payroll/employee-details-payroll.component';
import { DatePipe } from "@angular/common";
import { LeaveModuleComponent } from './pages/employee-pages/leave-module/leave-module/leave-module.component';
import { LeaveFormComponent } from "./pages/employee-pages/form-to-fill/leave-form/leave-form.component";
import { ComplaintFormComponent } from './pages/employee-pages/complaint-form/complaint-form/complaint-form.component';
import { FormsComponent } from './pages/admin-pages/forms/forms/forms.component';
import { TypeOfLeaveComponent } from './pages/admin-pages/forms/type-of-leave/type-of-leave/type-of-leave.component';
import { SettingComponent } from './pages/admin-pages/setting/setting/setting.component';
import { EmployeeUpdateOnboardComponent } from './pages/auth-pages/employee-update-onboard/employee-update-onboard/employee-update-onboard.component';
import { EmployeeWaitingComponent } from './pages/auth-pages/employee-waiting/employee-waiting/employee-waiting.component';
import { LevelTypeFormComponent } from './pages/admin-pages/forms/level-type-form/level-type-form/level-type-form.component';
import { AddDesignationFormComponent } from './pages/admin-pages/forms/add-designation-form/add-designation-form/add-designation-form.component';
import { AddDutiesComponent } from './pages/admin-pages/forms/add-duties/add-duties/add-duties.component';
import { AddTaskComponent } from './pages/admin-pages/forms/add-task/add-task/add-task.component';
import { AcademicCalenderComponent } from './pages/admin-pages/academic-calender/academic-calender/academic-calender.component';
import { AddAcademicCalenderComponent } from './pages/admin-pages/academic-calender/add-academic-calender/add-academic-calender/add-academic-calender.component';
import { CommanDasboardComponent } from './pages/comman-dasboard/comman-dasboard/comman-dasboard.component';
import { AuthInterceptor } from "./services/auth.interceptor";
import { UserProfileComponent } from './user-profile/user-profile/user-profile.component';
import { ShortTimePipe } from './short-time.pipe';
import { LeaveApproverComponent } from './pages/admin-pages/forms/leave-approver/leave-approver/leave-approver.component';
import { AddLocationComponent } from './pages/admin-pages/forms/add-location/add-location/add-location.component';
import { AddSubDutiesComponent } from './pages/admin-pages/forms/add-sub-duties/add-sub-duties/add-sub-duties.component';
import { AddAdditionalTaskComponent } from './pages/admin-pages/forms/add-aditional-task/add-additional-task/add-additional-task.component';
// import { AddAcademicCalenderComponent } from './pages/admin-pages/add-academic-calender/add-academic-calender/add-academic-calender.component';
// import {  UpdateLeaveFormComponent } from './pages/admin-pages/employee-leave-Details/update-Leave-form/upadte-leave-form/upadte-leave-form.component';
// import { LeaveFormComponent } from './pages/employee-pages/form-to-fill/leave-form/leave-form.component';
// import { LeaveFormComponent } from './pages/employee-pages/leave-form/leave-form/leave-form.component';
// import { LeaveFormComponent } from "./pages/employee-pages/form-to-fill/leave-form/leave-form.component";
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LeaveCalenderComponent } from './pages/admin-pages/academic-calender/leave-calender/leave-calender/leave-calender.component';
import { SearchEmployeeLeaveByMonthComponent } from './pages/admin-pages/academic-calender/search-employee-leave-by-month/search-employee-leave-by-month/search-employee-leave-by-month.component';
import { EmployeesLeaveDetailsByDateComponent } from './pages/admin-pages/academic-calender/employees-leave-details-by-date/employees-leave-details-by-date/employees-leave-details-by-date.component';
import { EmployeeLeaveDetailsByYearComponent } from './pages/admin-pages/academic-calender/employee-leave-details-by-year/employee-leave-details-by-year/employee-leave-details-by-year.component';
import { SecondApproverLeaveUpdateFormComponent } from './pages/approver-leave/second-approver-leave_Update-form/second-approver-leave-update-form/second-approver-leave-update-form.component';
import { GetAllEmployeeLeaveComponent } from './pages/approver-leave/getAllEmployeeLeave/get-all-employee-leave/get-all-employee-leave.component';
import { AddDepartmentComponent } from './pages/admin-pages/forms/add-department/add-department/add-department.component';
import { UpdateDepartmentComponent } from './pages/admin-pages/forms/update-department/update-department/update-department.component';
import { UpdateLevelComponent } from './pages/admin-pages/forms/update-level/update-level/update-level.component';
import { UpdateDesignationComponent } from './pages/admin-pages/forms/update-designation/update-designation/update-designation.component';
import { UpdateDutyComponent } from './pages/admin-pages/forms/update-duty/update-duty/update-duty.component';
import { UpdateSubDutyComponent } from './pages/admin-pages/forms/update-sub-duty/update-sub-duty/update-sub-duty.component';
import { UpdateTaskComponent } from './pages/admin-pages/forms/update-task/update-task/update-task.component';
import { OwnLeaveDetailsComponent } from './pages/employee-pages/own-leave-details/own-leave-details/own-leave-details.component';
import { UpdateLeaveApproverComponent } from './pages/admin-pages/forms/update-leave-approver/update-leave-approver/update-leave-approver.component';
import { GetAdditionalTaskbyTaskIdComponent } from './pages/admin-pages/forms/get-additional-taskbyTaskId/get-additional-taskby-task-id/get-additional-taskby-task-id.component';
import { GetAcademicCalenderComponent } from './pages/admin-pages/academic-calender/getAcademic-Calender/get-academic-calender/get-academic-calender.component';
import { AddShiftComponent } from './pages/admin-pages/forms/add-shift/add-shift/add-shift.component';
import { UpdateShiftComponent } from './pages/admin-pages/forms/update-shift/update-shift/update-shift.component';
import { GetFullDetailsComponent } from './pages/employee-pages/get-full-details/get-full-details/get-full-details.component';
import { GetEmpAttendanceByMonthComponent } from './pages/admin-pages/academic-calender/get-emp-attendance-by-month/get-emp-attendance-by-month/get-emp-attendance-by-month.component';
import { GetEmpAttendanceByYearComponent } from './pages/admin-pages/academic-calender/get-emp-attendance-by-year/get-emp-attendance-by-year/get-emp-attendance-by-year.component';
import { UpdateLocationComponent } from './pages/admin-pages/forms/update-location/update-location/update-location.component';
import { LeaveComponent } from './pages/admin-pages/leave/leave/leave.component';
import { ApprovedByFirstComponent } from './pages/admin-pages/leave/aprroved-By-First/approved-by-first/approved-by-first.component';
import { ApprovedBySecondComponent } from './pages/admin-pages/leave/aprroved-By-second/approved-by-second/approved-by-second.component';
import { YearlyHolidaysComponent } from './pages/admin-pages/academic-calender/yearly-holidays/yearly-holidays/yearly-holidays.component';
import { ShiftAssignComponent } from './pages/admin-pages/forms/shift-assign/shift-assign/shift-assign.component';
import { UpdateAssignShiftComponent } from './pages/admin-pages/forms/update-assign-shift/update-assign-shift/update-assign-shift.component';
import { StaffLeaveMonitoringComponent } from './pages/admin-pages/academic-calender/staff-leave-monitoring/staff-leave-monitoring/staff-leave-monitoring.component';
import { FullCalendarModule } from "@fullcalendar/angular";
import { AllEmployeeForshiftAssignComponent } from './pages/admin-pages/forms/forms/all-employee-forshift-assign/all-employee-forshift-assign/all-employee-forshift-assign.component';
// import { FullCalendarModule } from '@fullcalendar/angular';
// import { LeaveCalenderComponent } from './pages/admin-pages/leave-calender/leave-calender/leave-calender.component';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FullCalendarModule,
    
    
    ToastrModule.forRoot({
      // You can add global configuration here
    }), 
    // FullCalenderModule
    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    TimeAttendanceComponent,
    PersonalComponent,
    ForgotPasswordComponent,
    OnlyNumbersDirective,
    EmployeeDetailsComponent,
    AllEmployeesComponent,
    UpdateEmployeeComponent,
    HeadOfWarehouseManagerComponent,
    Warehouse1Component,
    Warehouse2Component,
    Warehouse3Component,
    UpdateProductComponent,
    AddProductComponent,
    FormToFillComponent,
    ApprovalleaveformComponent,
    NotificationComponent,
    LeaveDetailsEmployeeComponent,
    AllNotificationComponent,
    RejectedRequestComponent,
    AcceptedRequestComponent,
    AllRequestComponent,
    OvertimeNotificationComponent,
    UpdateOvertimeComponent,
    EmpPayrollComponent,
    HrNotificationComponent,
    AllLeaveNotificationHrComponent,
    PendingLeaveNotificationHrComponent,
    AcceptedLeaveNotificationHrComponent,
    RejectedLeaveNotificationHrComponent,
    RejectedOvertimeNotificationHrComponent,
    AcceptedOvertimeNotificationHrComponent,
    AllOvertimeNotificationHrComponent,
    PendingOvertimeNotificationHrComponent,
    SavePasswordComponent,
    PayrollProcessingComponent,
    EmployeeDetailsPayrollComponent,
    LeaveModuleComponent,
    LeaveFormComponent,
    ComplaintFormComponent,
    FormsComponent,
    TypeOfLeaveComponent,
    SettingComponent,
    EmployeeUpdateOnboardComponent,
    EmployeeWaitingComponent,
    LevelTypeFormComponent,
    AddDesignationFormComponent,
    AddDutiesComponent,
    AddTaskComponent,
    AcademicCalenderComponent,
    AddAcademicCalenderComponent,
    CommanDasboardComponent,
    UserProfileComponent,
    ShortTimePipe,
    LeaveApproverComponent,
    AddLocationComponent,
    AddSubDutiesComponent,
    AddAdditionalTaskComponent,
    LeaveCalenderComponent,
    SearchEmployeeLeaveByMonthComponent,
    EmployeesLeaveDetailsByDateComponent,
    EmployeeLeaveDetailsByYearComponent,
    SecondApproverLeaveUpdateFormComponent,
    GetAllEmployeeLeaveComponent,
    AddDepartmentComponent,
    UpdateDepartmentComponent,
    UpdateLevelComponent,
    UpdateDesignationComponent,
    UpdateDutyComponent,
    UpdateSubDutyComponent,
    UpdateTaskComponent,
    OwnLeaveDetailsComponent,
    UpdateLeaveApproverComponent,
    GetAdditionalTaskbyTaskIdComponent,
    GetAcademicCalenderComponent,
    AddShiftComponent,
    UpdateShiftComponent,
    GetFullDetailsComponent,
    GetEmpAttendanceByMonthComponent,
    GetEmpAttendanceByYearComponent,
    UpdateLocationComponent,
    LeaveComponent,
    ApprovedByFirstComponent,
    ApprovedBySecondComponent,
    YearlyHolidaysComponent,
    ShiftAssignComponent,
    UpdateAssignShiftComponent,
    StaffLeaveMonitoringComponent,
    AllEmployeeForshiftAssignComponent,


    

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
