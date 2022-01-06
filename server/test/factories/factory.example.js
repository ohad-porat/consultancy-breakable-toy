import { Factory } from "rosie";
import Faker from "faker";

import { MyModel } from "../../src/models/index.js";

Factory.define("MyModel", MyModel).attr("name", Faker.name.firstName);

export default Factory;
