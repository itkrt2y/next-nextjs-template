import { mount } from "@cypress/react";
import { App } from "~/app";
import "/index.css";

describe("Navigation", () => {
  it("navigates", () => {
    mount(<App />);

    cy.contains("Home").click();
    cy.contains("Hello World!").should("exist");

    cy.contains("Pokemon").click();
    cy.contains("pokemons#index").should("exist");
  });
});
