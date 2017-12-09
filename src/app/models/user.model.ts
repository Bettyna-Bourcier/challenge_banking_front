import { Outgoing } from "./outgoing.model";

export class User {
    clientNumber: string;
    password: string;
    firstName: String;
    lastName: String;
    outgoingsList: Array<Outgoing>;
}