import { Comatte } from "../index";


(async function() {
    try {        
        const comatte = new Comatte();
        
        const python_version = await comatte.with_comattes(["python3 --version", "python --version"]);
        console.log(python_version);
        
        const rust_version = await comatte.with_comattes(["rustc --version"]);
        console.log(rust_version);
        
        const node_version = await comatte.with_comattes(["node --version"]);
        console.log(node_version);
        
        // run python script
        const run_python = await comatte.with_comattes(["python3 test/test.py", "python test/test.py"]);
        console.log(run_python);
    } catch (err) {
        console.error(err);
    }
})();