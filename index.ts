import { exec } from "child_process";

/** 
 * @description Comatte, run terminal commands.
 * @mean comatte command
*/
export class Comatte {
	/**
	* @description exec command with new Comatte().exec_comatte
	*/
	async exec_comatte(comatte: string) {
		return new Promise((resolve, reject) => {
			exec(comatte, (error, stdout, stderr) => {
				if (error) {
					reject(stderr || error.message);
				} else {
					resolve(stdout.trim() || stderr.trim());
				}
			});
		});
	}
	
	/**
	* @description run multiples comatte!
	*/
	async with_comattes(comattes: Array<string>) {
		for (let comatte of comattes) {
			try {
				let result = await this.exec_comatte(comatte);
				if (result) return result;
			} catch (err) {
				// Continue to the next comatte
			}
		}

		return "Comatte not found!";
	}
}

const comatte = new Comatte();

export default comatte;