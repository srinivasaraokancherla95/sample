import React from 'react'

function Table(){
    return(
        <>
        <table border="1">
            <tr>
                <th>
                    S.No
                </th>
                <th>Employee Name</th>
                <th>Employee Age</th>
                <th>Employee Designation</th>
                <th> Employee Salary </th>
            </tr>
            <tr>
                <td>1</td>
                <td>Srinivas</td>
                <td rowspan="6">28</td>
                <td>Frontend Developer</td>
                <td>50,000</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Vasu</td>
                
                <td>Frontend Developer</td>
                <td>50,000</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Srinu</td>
                <td>Frontend Developer</td>
                <td>70,000</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Bhavya</td>
                <td>Backend Developer</td>
                <td>70,000</td>
            </tr>
            <tr>
                <td>5</td>
                <td>Varalakshmi</td>
                <td>Testing Application</td>
                <td>80,000</td>
            </tr>
            <tr>
                <td>6</td>
                <td>Sarath</td>
                <td>. Net</td>
                <td>40,000</td>
            </tr>
        </table>
        </>
    )
}

export default Table;