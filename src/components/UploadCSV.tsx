import { FileInput, Button } from "@mantine/core";
import {useState} from "react";
import { useNavigate } from "react-router-dom";

export function UploadCSV() {
    const [files, setFiles] = useState<File[] | undefined>(undefined);
    const navigate= useNavigate();

    async function SubmitCSV() {

        //send CSV files to the backend
        const data= new FormData();
        files?.forEach((file) => data.append("files", file));

        
        const res = await fetch("csv-uploads", { 
            method: "POST",
            body: data,
        });

        navigate("/dashboard");
    }
    
    
    return (
    <div>
    <FileInput
    w={300}
    label="Upload your Bank Statements in CSV Format"
    placeholder="Upload CSV"
    accept=".csv"
    value={files}
    onChange={setFiles}
    multiple
    />


    <Button 
    onClick={SubmitCSV}
    disabled={!files}
    >
    Submit
    </Button>
    
    </div>
    )
}