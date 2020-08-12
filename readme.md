# SMC Mongoose Query Builder Helper

SMC Mongoose Query Builder Helper is a simple wrapper for create mongoose queries for retrieve data from your mongoose collection(s) as you wish.

You can query your collections by following few small steps.
  - Create an empty query first
  - Append your initial query by adding conditions one by one
  - Pass query into `mongoose.model.find()`/ `mongoose.model.findOne()`

## Installation
Install the `smc-mongoose-query-builder-helper` as follows

```sh
$ npm install smc-mongoose-query-builder-helper --save
```

## Usage

```sh
import queryBuilder from 'smc-mongoose-query-builder-helper';

let query = {};

// If you want to find for a mongoose ObjectId. eg: the department
// list is stores in departments collection and that department that
// particular person working is stored in a variable called department
// as an ObjectId which refers to departments collection
query = queryBuilder.objectIdMatcher(quey, 'department', req.query.department);

// If you want to match an exact value. eg: the age of a person
query = queryBuilder.valueMatcher(quey, 'age', req.query.age);

// If you want to match a pattern. eg: search for a name by providing
// one or two letters of that name.
query = queryBuilder.patternMatcher(quey, 'name', req.query.name);

// If you want to find an opposite case of above patternMatcher.
// eg: you saved account status as a string in collection, and you want
// to find all users which are not same as a given state (say you want
// to find all non deleted users)
query = queryBuilder.patternUnMatcher(quey, 'status', req.query.status);

// If you want to check whether your data values is one of among given set
// eg: you have set of job roles for all employees (say there are 10),
// and you want to find who are playing managerial role (say there are 3)
const managerialRoles = ['senior_manager', 'manager', 'managerial_executive'];
query = queryBuilder.arrayElementMatcher(quey, 'user_role', managerialRoles);

// If you want to find a numeric field that contains a given number
eg: you want to find users whose phone numbers contains '1234'
query = queryBuilder.numberPatternMatcher(quey, 'phone_number', 1234);

// For further query buildings, 
//      queryBuilder.orOperator(query, valuesArray); and
//      queryBuilder.andOperator(query, valuesArray); methods also provided

```


### Dependencies

Dillinger is currently extended with the following plugins. Instructions on how to use them in your own application are linked below.

| package | README |
| ------ | ------ |
| mongoose | https://github.com/Automattic/mongoose/blob/master/README.md |

License
----

ISC

**A Free Software, Enjoy it!**
