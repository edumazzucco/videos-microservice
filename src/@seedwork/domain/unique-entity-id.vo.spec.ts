import InvalidUuidError from "../errors/invalid-uuid.error"
import UniqueEntityId from "./unique-entity-id.vo"
import {validate as uuidValidate} from 'uuid';


describe('UniqueEntityid Unit Test', () => {
    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, "validate")
    it("should throw error when uuid is invalid", () => {
        expect(() => new UniqueEntityId("fake id")).toThrowError(new InvalidUuidError)
        expect(validateSpy).toHaveBeenCalled()
    })

    it("should accept a uuid passed in constructor", () => {
        const uuid = "8c9e3b2a-b5d7-4d6c-9a2a-9e8b7a7e9d1f"
        const vo = new UniqueEntityId(uuid)
        expect(vo.id).toBe(uuid)
        expect(validateSpy).toHaveBeenCalled()
    }
    )

    it("should accept a uuid passed in constructor", () => {
        const vo = new UniqueEntityId()
        expect(uuidValidate(vo.id)).toBeTruthy()
        expect(validateSpy).toHaveBeenCalled()
    }
    )
})
