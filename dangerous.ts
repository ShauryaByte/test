/**
 * INTENTIONALLY VULNERABLE TEST FIXTURE.
 * All values and inputs in this repository are non-functional examples.
 */

import { exec } from "child_process";

export function runUserCommand(userInput: string) {
  // Intentionally unsafe: command injection fixture.
  exec(userInput);

  // Intentionally unsafe: dynamic code execution fixture.
  return eval(userInput);
}
