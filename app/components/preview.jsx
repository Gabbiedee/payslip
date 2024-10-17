const PayslipPreview = ({ employee, value }) => {
    return (
      <div className="bg-white border-2 border-indigo-600 shadow-lg rounded-lg p-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">Payslip Preview</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-lg text-gray-600">Employee Name:</span>
            <span className="text-xl font-medium text-indigo-600">{employee.firstName} {employee.lastName}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg text-gray-600">Job Role:</span>
            <span className="text-xl font-medium text-indigo-600">{employee.jobRole}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg text-gray-600">Address:</span>
            <span className="text-xl font-medium text-indigo-600">{employee.Address}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg text-gray-600">Joining Date:</span>
            <span className="text-xl font-medium text-indigo-600">{employee.Rdate}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg text-gray-600">Company Name:</span>
            <span className="text-xl font-medium text-indigo-600">{employee.companyName}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg text-gray-600">Pay Period:</span>
            <span className="text-xl font-medium text-indigo-600">{value.payPeriod}</span>
          </div>
       
          <div className="flex justify-between items-center">
            <span className="text-lg text-gray-600">Number of Days:</span>
            <span className="text-xl font-medium text-indigo-600">{value.noofDays}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg text-gray-600">Salary:</span>
            <span className="text-xl font-medium text-indigo-600">{value.Salary}</span>
          </div>
          </div>
      </div>
    );
  };

  export default PayslipPreview