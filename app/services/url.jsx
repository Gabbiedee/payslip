const baseUrl = 
process.env.NEXT_PUBLIC_BACKEND_API ||
 "http://localhost:5000" ;

const urls = {
  creatUser: `${baseUrl}/auth/signup`,
  loginUser: `${baseUrl}/auth/login`,
  registerEmployee: `${baseUrl}/employee/register`,
  getEmployee: `${baseUrl}/employee/searchEmployee`,
  getAllEmployees: `${baseUrl}/employee/`,
  getCompanyProfile: `${baseUrl}/user/getCompany`,
  updateCompanyProfile: `${baseUrl}/user/updateProfile`,

}

export default urls;
