import { render, screen, fireEvent } from "@testing-library/react"
import Login from "../app/login/page"

describe("Login Page Tests", () => {

test("renders username input", () => {
render(<Login />)

const usernameInput = screen.getByPlaceholderText("Username")

expect(usernameInput).toBeInTheDocument()
})

test("renders password input", () => {
render(<Login />)

const passwordInput = screen.getByPlaceholderText("Password")

expect(passwordInput).toBeInTheDocument()
})

test("renders login button", () => {
render(<Login />)

const loginButton = screen.getByRole("button", { name: /login/i })

expect(loginButton).toBeInTheDocument()
})

test("allows user to type in username field", () => {
render(<Login />)

const usernameInput = screen.getByPlaceholderText("Username")

fireEvent.change(usernameInput, { target: { value: "admin" } })

expect(usernameInput.value).toBe("admin")
})

})