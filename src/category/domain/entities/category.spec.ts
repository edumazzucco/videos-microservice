import { Category } from "./category";
import { omit } from 'lodash';
import { validate as uuidValidate } from "uuid";

describe("Category Tests", () => {
  describe("constructor of category", () => {
    let created_at = new Date();

    // Arrange
    const props = {
      name: 'Movie',
      description: 'some description',
      is_active: true,
      created_at
    };

    // Act
    let category = new Category(props);
    let propsWithoutCreatedAt = omit(category.props, 'created_at');

    describe("Category Tests all together", () => {
      test('should match the object', () => {
        expect(propsWithoutCreatedAt).toStrictEqual({
          name: 'Movie',
          description: 'some description',
          is_active: true,
        });
      });
    });

    describe("Category Tests one by one", () => {

      test('should have a valid id', () => {
        let category = new Category({name: "Movie"})
        expect(category.id).toBeDefined();
        expect(category.id).not.toBeNull();
        expect(uuidValidate(category.id)).toBeTruthy();
        expect(category.id).toBe(category.id);

        category = new Category({name: "Movie"}, '123')
        expect(category.id).toBe("123");
        expect(category.id).toBeDefined();
        expect(category.id).not.toBeNull();
        expect(uuidValidate(category.id)).toBeFalsy();
        expect(category.id).toBe(category.id);

        category = new Category({name: "Movie"}, 'c2a0de9a-919c-4fe1-9766-edd839cfde74')
        expect(category.id).toBe("c2a0de9a-919c-4fe1-9766-edd839cfde74");
        expect(category.id).toBeDefined();
        expect(category.id).not.toBeNull();
        expect(uuidValidate(category.id)).toBeTruthy();
        expect(category.id).toBe(category.id);

        category = new Category({name: "Movie"}, null)
        expect(category.id).toBeDefined();
        expect(category.id).not.toBeNull();
        expect(uuidValidate(category.id)).toBeTruthy();
        expect(category.id).toBe(category.id);

        category = new Category({name: "Movie"}, undefined)
        expect(category.id).toBeDefined();
        expect(category.id).not.toBeNull();
        expect(uuidValidate(category.id)).toBeTruthy();
        expect(category.id).toBe(category.id);
      });

      test('should have the correct name', () => {
        expect(category.name).toBe('Movie');
      });

      test('should have the correct description', () => {
        expect(category.description).toBe('some description');
      });

      test('should be active', () => {
        expect(category.is_active).toBeTruthy();
      });

      test('should have the correct created date and type', () => {
        expect(category.props.created_at).toBe(created_at);
        expect(category.props.created_at).toBeInstanceOf(Date);
      });
    });

    describe("Category Getters and Setters", () => {
    test('getter of name prop', () => {
        const category = new Category({name: "Movie"})
        expect(category.name).toBe("Movie")
    });

    test('getter and setter of description prop', () => {
        let category = new Category({name: "Movie"})
        expect(category.description).toBeNull();
        
        category = new Category({name: "Movie", description: "some description"})
        expect(category.description).toBe("some description")

        category = new Category({name: "Movie"})
        category['description'] = "other description"
        expect(category.description).toBe("other description")

        category['description'] = undefined;
        expect(category.description).toBeNull();

        category['description'] = null;
        expect(category.description).toBeNull();
    });

    test('getter and setter of is_active prop', () => {
        let category = new Category({name: "Movie"})
        expect(category.is_active).toBeTruthy();

        category = new Category({name: "Movie", is_active: true})
        expect(category.is_active).toBeTruthy();

        category = new Category({name: "Movie", is_active: false})
        expect(category.is_active).toBeFalsy();
        
    });

    test('getter of created_at prop', () => {
        let category = new Category({name: "Movie"})
        expect(category.created_at).toBeInstanceOf(Date);
    
        category = new Category({name: "Movie", created_at})
        expect(category.created_at).toBe(created_at);
    })
  })
})
});
