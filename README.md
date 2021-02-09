# design-patterns

Just some handy design patterns samples

## NullObject Pattern

Replace all the extra checks for NULL instances by creating a NullClass that does nothing or have some default data.
Instead of check class.isNull() we would check directly class.hasAccess() like a normal object but the NullClass would return always false.

## Builder Pattern

Another way to create objects. Build objects step by step, choosing what property you want to set.