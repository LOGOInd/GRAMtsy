# GRAMtsy - Goods Rental Management System

## The project is Hosted (here)[https://logoind.github.io/GRAMtsy]

## Summary:-
The purpose of the Goods Rental Management system is to allow for storing details of a large number of electronic devices, electrical appliances, books and other types of goods that can be provided to customers on rental basis. The other kinds of goods solely depend on the administrator. The system should allow to add, search, rent, return facilities separately to administrator, owner and customer. Different privileges are given to different types of users.
Types of Users:
1. Administrators
2. Managers
3. Customers

## The tasks that system will perform:

### Handling Type Classes:

Users: Administrator

Description: 
The users shall be able to create, edit, delete classes for types of goods.

Instances: 
User creates a new class Laptop.
User alters an existing class Books.
User deletes an existing class Phones.


### Editing Stock:

Users: Administrator, Manager

Description: 
The users will be able to add, edit and delete the stocks for existing classes. The deletion will not interfere with stocks already in rental progress with customers.

Instances: 
User adds a new book named ABC from XYZ publisher with quantity X.
User reduces the stock of a book ABC to 5 from 10.
A copy of XYZ book is rented by a customer. User reduces the stock of book XYZ to 0 from 10. This shall induce and display error to the user with reason specified.

### Searching Stock:

Users: Administrator, Manager, Customers

Description: 
The users will be able to query and look in the existing goods. This functionality will be supported with a filter feature. Users will be able to narrow down their search with the filters.
Information access will be different for each type of user.
Administrator and Manager:- Access to all information on all goods.
Customer:- Access to only availability and details like description, specifications, rate card and rental period of the good.

Instances: 
User views all products.
User views all books.
Customer views all iPhones.

### Issuing the Goods:

Users: Customers

Description:
The user will be able to issue the goods, and will have to return them before the return time.

The features included in the goods issue and return system are as follows:
Product id: This is a unique id through which the product can be tracked.
Borrower: It is the person who will borro the product from the issuer.
Issuer: The person who issues the product like the department.
Date of issuing: It is the date that will be recorded on which the product will be issued.
Date of return: It is the date on which the particular product will be returned.
Fine: Extra amount received for the late return of the product.

### Returning the Rented Goods:

Users: Customers

Description:
The user will have to return the goods rented to him/her in the desired duration decided at the time of issue. When a user returns a borrowed product back to the issuer/manager, the entry for his borrowing action must be updated with the date returned. Also for product entry; the number of available copies of that particular product must be incremented.


<hr />

