# Module 03 | Week 06

## CRUD with Express.js
---

## Topics to cover

- [ ] 1. Express.js Routes
- [ ] 2. Implementing CRUD over HTTP
- [ ] 3. EJS Templates
- [ ] 4. Forms (action, method)
- [ ] 5. Devtools network tab

### Express.js Routes
---

```
CRUD           METHOD      PATH

CREATE         GET         /pets/new
CREATE         POST        /pets
READ (ALL)     GET         /pets
READ (ONE)     GET         /pets/:id
UPDATE         GET         /pets/:id/edit
UPDATE         POST        /pets/:id
DELETE         POST        /pets/:id/delete

```



### Database
---
```javascript
// Resource: PET(S)

const database = {
  { id: 1, name: 'Stanley', age: 4, type: 'cat' },
  { id: 2, name: 'Dr. Toby', age: 7, type: 'dog' },
  { id: 3, name: 'Juanita', age: 1, type: 'cat' },
  { id: 4, name: 'Camilla', age: 2, type: 'hamster' },
  { id: 5, name: 'Little Boots', age: 4, type: 'dog' },
}
```