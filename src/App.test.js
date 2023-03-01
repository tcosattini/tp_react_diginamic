import React from "react";

import { act } from '@testing-library/react';
import { createRoot } from 'react-dom/client';

import {BrowserRouter as Router} from 'react-router-dom';

import { ClientView } from "./App/views";


describe('Test Onglet Client', () => {

  let container = null;
  let root = null;

  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
    root = createRoot(container)
  });

  afterEach(() => {
    // cleanup on exiting
    //unmountComponentAtNode(container);
    root.unmount();
  });

  it("Présence du titre de l'onglet", () => {
    act(() => {
      root.render(
        <Router>
          <ClientView />
        </Router>
      );
    });
    expect(container.textContent).toContain("Client");

  });
});