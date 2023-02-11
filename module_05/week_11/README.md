## Module 05 | Week 11
## Database Design

## Topics to cover

- [X] 1. Tables
- [X] 2. Data Types
- [X] 3. Naming Conventions
- [X] 4. Primary Keys and Foreign Keys
- [X] 5. Relationships
- [X] 6. Design Concepts
- [X] 7. ERDs

### 1. Tables
---

Tables are composed of columns and rows.
* Column or Field: Info defined for this table's records, all field names are singular, think `id`, `name`, `address`, etc.
* Row: A record, info for some or all columns, must have a unique PK (primary key)
* Typically named in `snake_case`, all table names are plural, think `users`, `articles`, etc.

### 2. Data Types
---

[Visit the official documentation and see what is available to you](https://www.postgresql.org/docs/current/datatype.html).

Every field must have a data-type associated with it. Pick carefully, size stated does matter as this is allocated storage space. Although it doesn't matter much nowadays, as storage is very cheap.

Simple is better... consider the following types when you can:

* [Integer](https://www.postgresql.org/docs/current/datatype-numeric.html#DATATYPE-INT)
* [Character](https://www.postgresql.org/docs/current/datatype-character.html)
* [Date/Time](https://www.postgresql.org/docs/current/datatype-datetime.html)
* [Boolean](https://www.postgresql.org/docs/current/datatype-boolean.html)

### 3. Naming Conventions
---

* May be different in any particular project or company, but `snake_case` is the norm!
* Always listen to your work.
* Different stacks sometimes have different conventions... Example) C# may ask you to use PascalCase in your MSSQL DB as a standard
* Most important thing is consistency!
* Usually plural nouns for table names, and singular nouns for their fields.

### 4.1 Primary Keys
---

It's a way to uniquely identify a particular record. It is also unique within a table.

* Can be any data-type (integer is recommended)
* PK should be id, simple and expected
* Used to represent and identify record, anything can be changed, but never change this value!!

### 4.2 Foreign Keys
---

Represents (and should be same data-type) as the PK in another table

* Used for describing relationships
* Named as singular_id, like user_id



### 5. Relationships
---

* [One-to-One](https://en.wikipedia.org/wiki/One-to-one_(data_model)) (Single-to-Single): Argument is usually why not just include another column, unless it is uncommon for space-savings...
* [One-to-Many](https://en.wikipedia.org/wiki/One-to-many_(data_model)) (Many-to-One): Extremely column... maybe a user has many blog posts
* [Many-to-Many](https://en.wikipedia.org/wiki/Many-to-many_(data_model)): Common enough... think actors and movies! TONS of overlap in cases like this. Requires an extra table, so be careful!

### 6. Design Concepts
---

* [Required fields](https://www.postgresql.org/docs/9.4/ddl-constraints.html)! Think of how the record is filled-in at time of creation... You CANNOT create a record without this!!! Most websites just ask for an e-mail address and a password, to get started. Simpler is better to get people in, or get a record started. Careful with use of required fields!
* [Default values](https://www.postgresql.org/docs/9.4/ddl-default.html)... Timestamp NOW(), active = true, onsale = false, id = autoincrement... Saves time and concern when creating new records
* [Calculated fields](https://www.postgresql.org/docs/12/ddl-generated-columns.html) - please NO (resist the urge...) firstname lastname = fullname concatenated... But now that you have a fullname, you no longer have a single place for truth, it is easy to forget to update all columns... better to use a SELECT later to combine these and have accurate info (also increases time to save record during CREATE or UPDATE)
* Try not to delete anything... it is often useful to have a record, and sometimes legally important to hold onto old records Think audits from government!! This is called [SAFE DELETE](https://medium.com/meroxa/creating-a-soft-delete-archive-table-with-postgresql-70ba2eb6baf3)! The idea is, your app simply marks a record as disabled or inactive (active=false)
* DRY... don't repeat! Think status, city, etc. ---> Make a new table versus an ENUM

### 7. ERDs
---

Entity Relationship Diagrams allow you to define entities, properties attached to those entities, and finally how those entities relate to each other through relationships.

Visit [https://draw.io/](https://draw.io/) and try drawing out some entity relationship diagrams.

There are videos with great reminders on how to use the tool, like the one [here](https://www.youtube.com/watch?v=lAtCySGDD48). You can learn more about potential formatting practices [here](https://www.smartdraw.com/entity-relationship-diagram/).
