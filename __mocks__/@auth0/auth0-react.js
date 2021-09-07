const useAuth0 = () => ({
  // to change the values of email_verified and "https://curzhacks.com/roles"
  // you need to call the mockReturnValue method inside of the "it" block when testing
  // Ex: "email_verified.mockReturnValueOnce("false")
  user: {
    email_verified: jest.fn().mockReturnValue("true"),
    email: "mock email",
    "https://cruzhacks.com/roles": jest.fn().mockReturnValue(["User"]),
    sub: "mock user",
  },
  getAccessTokenSilently: jest
    .fn()
    .mockImplementation(() => Promise.resolve("Mocked Access Token")),
})

export default { useAuth0 }
