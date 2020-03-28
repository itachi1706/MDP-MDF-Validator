# MDP-MDF-Validator
[![App Builds](https://github.com/itachi1706/MDP-MDF-Validator/workflows/Node.js%20CI/badge.svg)](https://github.com/itachi1706/MDP-MDF-Validator/actions)
![Maintenance](https://img.shields.io/maintenance/no/2020)
![GitHub last commit](https://img.shields.io/github/last-commit/itachi1706/MDP-MDF-Validator)
[![GitHub](https://img.shields.io/github/license/itachi1706/MDP-MDF-Validator)](https://github.com/itachi1706/MDP-MDF-Validator/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/itachi1706/MDP-MDF-Validator)](https://github.com/itachi1706/MDP-MDF-Validator/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/itachi1706/MDP-MDF-Validator)](https://github.com/itachi1706/MDP-MDF-Validator/pulls)
![GitHub repo size](https://img.shields.io/github/repo-size/itachi1706/MDP-MDF-Validator)
[![Heroku](https://pyheroku-badge.herokuapp.com/?app=scse-mdp-validator&style=flat)](https://scse-mdp-validator.herokuapp.com/)

This is an improved version of the existing MDF Validator that is used internally during the NTU CZ3004 MDP module. This was created primarily to aid in ensuring the proper generation of the MDF String as well as to help calculate scoring from the MDF string you generate. While the current implementation works perfectly fine, it only helps you calculate your score if you match it with one of the 5 sample arenas that has been provided  

### [ACCESS THE SITE HERE](https://scse-mdp-validator.herokuapp.com/)

## Features
* Material Designed Inspired UI
* Ability to create your own map (Object Placement Mode)
* Ability to import/export maps that are created
* Ability to load pre-defined maps, which are actual leaderboard map layouts from prior semesters
* Ability to validate MDF without refresh
* Limited offline capability for the site [(see below)](#offline-capability)

## Offline Capability
This site has limited support for offline usage. As long as the site has been loaded, you are able to design/load/save maps and validate MDF strings and get scores without internet access. This is especially useful if the device is currently connected only to the Raspberry PI on the robot where you do not have internet access

## Comparisions
Existing Implementation             |  New Implementation
:-------------------------:|:-------------------------:
![](/readmeres/old.png)  |  ![](/readmeres/new.png)

___This program is provided as-is and is not being actively maintained___
