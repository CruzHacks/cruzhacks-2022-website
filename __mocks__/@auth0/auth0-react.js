const { useAuth0 } = require("@auth0/auth0-react")

jest.mock("@auth0/auth0-react", () => ({ useAuth0: jest.fn() }))

useAuth0.mockReturnValue({
  user: "random user",
  getAccessTokenSilently: jest
    .fn()
    .mockImplementation(() => Promise.resolve("Mocked Access Token")),
})
