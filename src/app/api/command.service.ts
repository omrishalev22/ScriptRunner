export class CommandService {
  private allCommands = {
    'sprinters1': 'npm run serve -- --backend http://d4-sprinters1.redbend.com:8080'
  };

  getAllCommands() {
    return this.allCommands;
  }

  getCommand(name) {
    if (this.allCommands[name]) {
      return this.allCommands[name];
    } else {
      return 'Command was not found!';
    }
  }

  createNewCommand() {

  }
}
