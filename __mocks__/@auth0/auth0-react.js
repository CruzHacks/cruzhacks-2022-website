const useAuth0 = () => ({
  user: "random user",
  getAccessTokenSilently: jest
    .fn()
    .mockImplementation(() => Promise.resolve("Mocked Access Token")),
})

export default { useAuth0 }
