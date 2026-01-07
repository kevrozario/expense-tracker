import { FileInput, Button, TextInput, Group, Stack, Center } from "@mantine/core";
import {useState} from "react";
import { useNavigate } from "react-router-dom";


type Entry = {
    file: File | null;
    account: string;
}


export function UploadCSV() {
    const [entries, setEntries] = useState<Entry[]>([{file: null, account: ""}]);
    const navigate= useNavigate();

    //adds new file input and text input
    function addEntry() {
        setEntries([...entries, {file: null, account: ""}]);
    }

    //updates the account value for an entry
    function updateAcc(i: number, value: string) {
        const temp=[...entries];
        temp[i].account=value;
        setEntries(temp);
    }

    //updates the file value for an entry
    function updateFile(i:number, file: File | null) {
        const temp=[...entries];
        temp[i].file=file;
        setEntries(temp);
    }





    async function SubmitCSV() {

        //send CSV files to the backend
        const data= new FormData();

        entries.forEach((entry)=> {
            if (entry.file && entry.account.trim() !== "") {
                data.append("files", entry.file);
                data.append("accounts", entry.account);
            }
        });
        
        const res = await fetch("/csv-uploads", { 
            method: "POST",
            body: data,
        });

        //don't navigate if there is an error
        if (!res.ok) {
            return;
        }

        navigate("/dashboard");
    }
    
    
    return (
    <div>
    <Stack mt="xl">
        <Stack>

        {entries.map((entry, i)=> (
            <div key={i}>
                <Group>
                <TextInput
                w={300}
                size="lg"
                placeholder="Bank Account Name"
                value={entry.account}
                onChange={(event)=>updateAcc(i, event.currentTarget.value)}
                />
                <FileInput
                w={300}
                size="lg"
                placeholder="Upload CSV"
                accept=".csv"
                value={entry.file}
                onChange={(file)=> updateFile(i, file)}
                />
                </Group>
        </div>
        ))}
        </Stack>
    <Stack>
    <Button onClick={addEntry} size="md">
        Add New Account
    </Button>

    <Button 
    onClick={SubmitCSV}
    disabled={!entries}
    size="md"
    styles={{
        root: {
            backgroundColor: "#00ffffff"
        }
    }}
    >
    Submit
    </Button>
    </Stack>  
    </Stack>  
    </div>
    )
}