class LeaveRequest {
    private status: string = "Submit";
  
    submitLeaveRequest(): void {
      console.log("Leave request submitted.");
    }
  
    approveLeaveRequest(): void {
      this.status = "Approve";
      console.log("Leave request approved.");
    }
  
    rejectLeaveRequest(): void {
      this.status = "Rejected";
      console.log("Leave request rejected.");
    }
  
    getStatus(): string {
      return this.status;
    }
  }
  
  class Manager {
    private projectDelivered: boolean = false;
    private leaveRequest: LeaveRequest;
  
    constructor() {
      this.leaveRequest = new LeaveRequest();
    }
  
    processLeaveRequest(): void {
      if (this.projectDelivered) {
        this.leaveRequest.approveLeaveRequest();
      } else {
        this.leaveRequest.rejectLeaveRequest();
      }
    }
  }
  
  class Employee {
    private leaveRequest: LeaveRequest;
  
    constructor() {
      this.leaveRequest = new LeaveRequest();
    }
  
    applyForLeave(): void {
      this.leaveRequest.submitLeaveRequest();
    }
  
    getLeaveStatus(): string {
      return this.leaveRequest.getStatus();
    }
  }
  
  // Example usage
  const manager = new Manager();
  const employee = new Employee();
  
  employee.applyForLeave();
  manager.processLeaveRequest();
  
  console.log(`Leave status: ${employee.getLeaveStatus()}`);
  