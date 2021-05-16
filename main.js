// Name
// Prüfungsnummer
// Vertiefung
// Vertiefung Nummer
// Vorlesungen
// Übungen
// Praktikum
// CP
// Regelsemester
// WiSe / SoSe

const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const clipboardy = require('clipboardy')

const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'Name',
    default: () => {
      return clipboardy.readSync()
    }
  },
  {
    type: 'number',
    name: 'id',
    message: 'Prüfungsnummer'
  },
  {
    type: 'list',
    name: 'specialization',
    message: 'Vertiefungsrichtung',
    choices: [
      'G - Gemeinsame Module',
      'A - Automatisierung',
      'E - Elektrische Energietechnik',
      'M - Mikroelektronik',
      'NI - Nachrichtentechnik und Informationstechnik',
      'N - Nachrichtentechnik',
      'I - Informationstechnik',
      'B-EI-WMT - Wahlmodule Technisch',
      'B-EI-WMNT - Wahlmodule Nicht-Technisch'
    ]
  },
  {
    type: 'number',
    name: 'specializationModuleNumber',
    message: 'Modulnummer'
  },
  {
    type: 'number',
    name: 'creditPoints',
    message: 'Creditpoints'
  },
  {
    type: 'number',
    name: 'lectures',
    message: 'Vorlesungsstunden',
    default: 0
  },
  {
    type: 'number',
    name: 'excercises',
    message: 'Übungsstunden',
    default: 0
  },
  {
    type: 'number',
    name: 'internship',
    message: 'Praktikumsstunden',
    default: 0
  },
  {
    type: 'number',
    name: 'seminar',
    message: 'Seminarstunden',
    default: 0
  },
  {
    type: 'input',
    name: 'semesterNumber',
    message: 'Regelsemester'
  },
  {
    type: 'input',
    name: 'lecturer',
    message: 'Dozent'
  }
]

const filePath = path.join(__dirname, './data.json')
var json = []

if (fs.existsSync(filePath)) {
  const string = fs.readFileSync(filePath).toString()
  json = JSON.parse(string)
}

inquirer
    .prompt(questions)
    .then(answers => {
      // Process data
      answers.specialization = answers.specialization.split(' ')[0]
      answers.semesterNumber = answers.semesterNumber.split(',').map(x => parseInt(x))
      answers.lecturer = answers.lecturer.split(',')

      // Write data
      console.log(answers)
      json.push(answers)
      fs.writeFileSync(filePath, JSON.stringify(json))
    })
    .catch(error => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered
        console.error('Unable to render menu.')
      } else {
        // Something else
        console.error(error.message)
      }
    })
