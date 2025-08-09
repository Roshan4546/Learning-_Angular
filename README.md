# Learning-_Angular

# Learning Angular

## 1. Angular CLI

**Definition:**  
Angular CLI (Command Line Interface) is a tool that helps developers create, build, test, and deploy Angular applications.

### Common CLI Commands

| Command | Purpose | Alias |
|---------|---------|-------|
| `ng new <name>` | Create a new Angular project/workspace | `n` |
| `ng generate component <name>` | Create a new component | `g` |
| `ng serve` | Run application locally with live reload | `s`, `dev` |
| `ng build` | Compile project into `/dist` for deployment | `b` |
| `ng test` | Run unit tests | `t` |
| `ng lint` | Run linting tool |
| `ng update` | Update Angular & dependencies |
| `ng version` | Show Angular CLI version | `v` |
| `ng add <library>` | Add external library support |
| `ng config` | Get/set configuration values |

---

## 2. Creating a Component

**Command:**

```bash
ng generate component <component-name>



  // ! component 

to create a component ng genarate component name
there are two type of component 
1. normal component 
2. inline component

<!-- make custom component -->

1. angular overide the html tags with this component.

<!-- function call on button click -->

1. make button
<!-- <button>Edit me</button> -->
2. define a function
<!-- changehandler() {
    alert("function called");
  } -->
3. call function on button function
  <!-- (click) = 'changehandler()' -->
4. call function from other function
we use another function use this in function ts.
<!-- changehandler() {
    alert("function called");
    this.otherfunction();
  }

  otherfunction() {
    console.log("another function.");
  } -->
5. interview Question.

 <!-- how you call function
why use this keyword  -->


# define data type in angular

1. why we need to define type
2. define type for property
3. define multiple type to property
4. define type for function params
5. call function with params on button click
6. interview question