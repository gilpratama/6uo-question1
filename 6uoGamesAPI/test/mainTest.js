var request = require("supertest");
var app = require("../app");

describe("Valid Login", function () {
    it("Login with valid account", function (done) {
        request(app)
            .post("/login")
            .send({
                email: "test1@6uogames.com",
                password: "password"
            })
            .expect(200) // Expect a 200 OK response
            .expect("Content-Type", /json/) // Expect a JSON response
            .expect((res) => {
                // Check the response body for the 'message' and 'session' keys
                if (!res.body.hasOwnProperty("message"))
                    throw new Error("Expected 'message' key");

                if (!res.body.hasOwnProperty("session"))
                    throw new Error("Expected 'session' key");
                
                // You can also add additional checks here if needed.
                // For example, you can check the values of 'message' and 'session'.
                if (res.body.message !== "Success")
                    throw new Error("Expected 'message' to be 'Success'");
                
                // You can also validate the 'session' token format if necessary.

            })
            .end(done); // Don't forget to call 'end' to finish the test
    });
});