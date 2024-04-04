/**
 * TypeName: Partial<Type>
 * Description:Makes all the properties optional
 */

/**
 * Example:
 */

type Coffee = {
  name: "Espresso" | "Latte" | "Cappuccino";
  size: "small" | "medium" | "large";
  sugar: number;
  isCold: boolean;
};

function getCoffee(updateCoffee: Partial<Coffee>) {
  const coffee = {
    name: "Cappuccino",
    size: "large",
    sugar: 2,
    isCold: false,
  };
  return { ...coffee, ...updateCoffee };
}

getCoffee({ name: "Espresso" });

/**
 * TypeName: Required<Type>
 * Description:All properties of an object become required.
 */

/**
 * Example:
 */

const newCoffee: Required<Coffee> = {
  name: "Cappuccino",
  size: "large",
  isCold: true,
  sugar: 4,
};

/**
 * TypeName: Readonly<Type>
 * Description:We can not change value of a property.
 */

/**
 * Example:
 */

type ReadonlyCoffeeModel = Readonly<Coffee>;

const myCoffee: ReadonlyCoffeeModel = {
  name: "Cappuccino",
  size: "large",
  isCold: true,
  sugar: 3,
};

// myCoffee.name = "Latte";

/**
 * TypeName: Record<Key , Type>
 * Description:Describe an object with key and value type.
 */

/**
 * Example:
 */

const coffees: Record<string, Coffee> = {
  first: {
    name: "Cappuccino",
    isCold: false,
    size: "medium",
    sugar: 3,
  },
};

/**
 * TypeName: Pick<Type,keys>
 * Description:Can create a new type by picking keys from another type.
 */

/**
 * Example:
 */

type CoffeeWithoutSugar = Pick<Coffee, "name" | "isCold" | "size">;

/**
 * TypeName: Omit<Type,keys>
 * Description:Can create a new type by removing keys from another type.Omit it opposite of pick
 */

/**
 * Example:
 */

type CoffeeWithoutSugar2 = Omit<Coffee, "name">;
