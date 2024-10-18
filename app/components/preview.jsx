const PayslipPreview = ({ employee, value }) => {
  return (
    <div className="bg-white border-2 border-indigo-600 shadow-lg  h-3/4 rounded-lg p-6 max-w-3xl mx-auto">
      <div className="flex justify-between">
        <div>
          <p className="font-bold">
            <span className="text-2xl">{employee.companyName}</span>
          </p>
          <p className="font-bold">
            <span className="font-normal">{employee.CAddress}</span>
          </p>
        </div>
        <h1 className="text-xl font-bold text-indigo-500">Employee Payslip</h1>
      </div>

      <div className="mt-4">
        <h2 className="bg-indigo-500 text-xl p-2 font-bold">
          Employee Information
        </h2>
        <p className="font-semibold my-2">
          Employee Name:{" "}
          <span className="font-normal">
            {employee.firstName} {employee.lastName}
          </span>
        </p>
        <p className="font-semibold my-2">
          Job Role: <span className="font-normal">{employee.jobRole}</span>
        </p>
        <p className="font-semibold my-2">
          Address: <span className="font-normal">{employee.Address}</span>
        </p>

        <p className="font-semibold my-2">
          Joining Date: <span className="font-normal">{employee.Rdate}</span>
        </p>
        <p className="font-semibold my-2">
          Pay Period: <span className="font-normal">{value.payPeriod}</span>
        </p>
        <p className="font-semibold my-2">
          Number of Days:{" "}
          <span className="font-normal">{value.noofDays}</span>
        </p>
      </div>

      <table className="w-full mt-6">
        <thead>
          <tr>
            <th className="border px-4 py-2 bg-indigo-100">Description</th>
            <th className="border px-4 py-2 bg-indigo-100">Amount</th>
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
          <tr>
            <td className="border px-4 py-2 font-bold">Net Salary</td>
            <td className="border px-4 py-2 font-bold">
              ${value.Salary - value.Deductions + parseFloat(value.allowance)}
            </td>
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
