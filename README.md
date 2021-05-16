![Banner](./assets/banner.png)

This is a small cli tool to easier extract the information provided in our modules handbook. **Currently I only extracted the Electrical Engineering / Information Technology (EI) handbook.** The cli tool asks simple questions about each module which then creates a json file to store all the modules into.

The data can be found here: [db.json](https://raw.githack.com/KuhlTime/hsd-handbook-extractor/main/db.json)

## 🚏 Structure

- `version`: The version of the module handbook used to create the db.
- `degree`: The name of the degree the data is from.
- `relationships`: The relationships property defines connection rules between the different specializations and modules. Each relationship is defined by an binary operation followed by the specilization shorthand or a specific module id. **The relationships are nested and allow for a *infinitly* deep tree**. Relationships can either be marked as `and` or `xor` (For now there has been no need for any other relationship).
- `specializations`: These are groups which a module can be associated with.
  - `name`: The name of the specialization.
  - `factor`: Different specilizations are weight differently when calculating the average grade of a student. 
  - `1:n`: Whether or not only a single module has to be taken or all of them.
  - `requiredCreditPoints`: The minimum required amount of credit points to get started with this specialization.
- `modules`: These are all the different modules there are for the particular degree.
  - `name`: The name of the module.
  - `id`: The exam id. (This is different from the module id defined in the ossc)
  - `specialization`: This is the link to a specialization. Every module is required to have a specialization linked to it.
  - `specializationModuleNumber`: Most modules are marked with a special index inside the specialization. E.g. `G 1`. In case they don't have this index this field is `0` by default.
  - `creditPoints`: The amount of credit points rewarded when completing the module.
  - `lectures`: The weekly hours of lectures tought.
  - `excercises`: The weekly hours of excercises thought.
  - `internship`: The weekly hours spend during internships.
  - `seminar`: The weekly hours planned for seminars.
  - `semesterNumber`: An array of semesters where this module is beeing thought. Some modules are beeing thought over multiple semesters. In case it is unclear when the module is thought the array will be empty.
  - `lecturer`: An array of lecturers teaching the module.


## 🌈 Execution

Run `npm install` followed by `npm start`. You are then guided through the creation of a new module.
