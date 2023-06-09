import { Category } from "./category"

describe("Category Tests", () => {
    describe("constructor of category", () => {
        const created_at = new Date();

        // Arrange
        const props = {
            name: 'Movie',
            description: 'some description',
            is_active: true,
            created_at
        }
        
        // Act
        const category = new Category(props);

        // Assert
        describe("Category Tests one by one", () => {
            test('should have the correct name', () => {
                expect(category.name).toBe('Movie');
            });

            test('should have the correct description', () => {
                expect(category.description).toBe('some description');
            });

            test('should be active', () => {
                expect(category.is_active).toBeTruthy();
            });

            test('should have the correct created date', () => {
                expect(category.created_at).toBe(created_at);
            });
        });

        describe("Category Tests all together", () => {
            test('should match the object', () => {
                expect(category.props).toStrictEqual({
                    name: 'Movie',
                    description: 'some description',
                    is_active: true,
                    created_at
                });
            });
        });
    });
});
