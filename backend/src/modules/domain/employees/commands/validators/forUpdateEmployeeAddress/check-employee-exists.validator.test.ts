import * as check_employee_exists_validator from "./check-employee-exists.validator"
import * as employees_repository from "../../../repositories/employees.repository"
import * as syncEventDispatcher from "../../../../../common/events/syncEventDispatcher"

import * as update_employee_address_command from "../../update-employee-address.command"
// @ponicode
describe("validate", () => {
    let inst: any
    let inst2: any
    let inst3: any

    beforeEach(() => {
        inst = new syncEventDispatcher.SyncEventDispatcher(undefined)
        inst2 = new employees_repository.EmployeeRepository(undefined, inst)
        inst3 = new check_employee_exists_validator.CheckEmployeeAddressExists(inst2)
    })

    test("0", async () => {
        let param1: any = new update_employee_address_command.UpdateEmployeeAddress(0, "generate bluetooth firewall", "transmit bluetooth bus", "synthesize wireless microchip", "generate bluetooth firewall")
        await inst3.validate(param1)
    })

    test("1", async () => {
        let param1: any = new update_employee_address_command.UpdateEmployeeAddress(100, "parse mobile firewall", "parse mobile firewall", "synthesize wireless microchip", "parse mobile firewall")
        await inst3.validate(param1)
    })

    test("2", async () => {
        let param1: any = new update_employee_address_command.UpdateEmployeeAddress(1, "synthesize wireless microchip", "generate bluetooth firewall", "generate bluetooth firewall", "parse mobile firewall")
        await inst3.validate(param1)
    })

    test("3", async () => {
        let param1: any = new update_employee_address_command.UpdateEmployeeAddress(1, "generate bluetooth firewall", "synthesize wireless microchip", "transmit bluetooth bus", "reboot neural card")
        await inst3.validate(param1)
    })

    test("4", async () => {
        let param1: any = new update_employee_address_command.UpdateEmployeeAddress(-5.48, "parse mobile firewall", "parse mobile firewall", "generate bluetooth firewall", "generate bluetooth firewall")
        await inst3.validate(param1)
    })

    test("5", async () => {
        let param1: any = new update_employee_address_command.UpdateEmployeeAddress(-Infinity, "", "", "", "")
        await inst3.validate(param1)
    })
})
