namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeaching?: number;
    experienceTeachingReact?: number;
  }
  export class React extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingReact === undefined || this.teacher.experienceTeachingReact < 1) {
        return "No available teacher";
      } else {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
    }
  }
}
