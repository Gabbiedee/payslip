const PayslipPreview = ({ employee, company, value }) => {
  if (!employee) {
    return <p>No employee data available</p>;
  }
  return (
    <div className="bg-white border-2 border-gray-600 shadow-lg  h-3/4 rounded-lg p-6 max-w-3xl mx-auto">
      <div className="flex justify-between">
        <div>
          <p className="font-bold">
            <span className="text-2xl">{company.organisationName}</span>
          </p>
          <p className="font-bold">
            <span className="font-normal">{company.Address}</span>
          </p>
        </div>
        <h1 className="text-xl font-bold text-gray-800">Employee Payslip</h1>
      </div>

      <div className="mt-4">
        <h2 className="bg-gray-500 text-xl p-2 font-bold">
          Employee Information
        </h2>
        <p className="font-semibold my-2">
          Employee Name:{" "}
          <span className="font-normal">{employee.fullName}</span>
        </p>
        <p className="font-semibold my-2">
          Job Role: <span className="font-normal">{employee.JobRole}</span>
        </p>
        <p className="font-semibold my-2">
          Address: <span className="font-normal">{employee.Address}</span>
        </p>

        <p className="font-semibold my-2">
          Joining Date:{" "}
          <span className="font-normal">{employee.Resumptiondate}</span>
        </p>
        <p className="font-semibold my-2">
          Pay Period: <span className="font-normal">{value.payPeriod}</span>
        </p>
        <p className="font-semibold my-2">
          Number of Days: <span className="font-normal">{value.noofDays}</span>
        </p>
      </div>

      <table className="w-full mt-6">
        <thead>
          <tr>
            <th className="border px-4 py-2 bg-gray-100">Description</th>
            <th className="border px-4 py-2 bg-gray-100">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Basic Salary</td>
            <td className="border px-4 py-2">{value.Salary}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Allowance</td>
            <td className="border px-4 py-2">{value.allowance}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Deductions</td>
            <td className="border px-4 py-2">{value.Deductions}</td>
          </tr>
        </tbody>
      </table>

      <div className="w-3/4 block mx-auto my-5">
        <p>
          If you have any questions regarding this payslip, please contact:{" "}
        </p>
      </div>
    </div>
  );
};

export default PayslipPreview;
