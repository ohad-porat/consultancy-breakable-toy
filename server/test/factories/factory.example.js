// eslint-disable-next-line import/no-unresolved
import Faker from "faker";
import { Factory } from "rosie";

import { MyModel } from "../../src/models/index.js";

Factory.define("MyModel", MyModel).attr("name", Faker.name.firstName);

export { Factory };
