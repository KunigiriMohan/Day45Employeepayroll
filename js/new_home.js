window.addEventListener('DOMContentLoaded',(event) => {
    createInnerHtml();
});


const createInnerHtml =() => {
    const headerHtml=
        "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>StartDate</th><th>Actions</th>";
    const innerHtml =  `${headerHtml}
                
    <tr>
        <td><img class="profile" alt="" src="../asserts/profile-images/Ellipse -2.png"></td>
        <td>Mohan Kunigiri</td>
        <td>Male</td>
        <td><div class="dept-label">HR</div><div class="dept-label">Finance</div></td>
        <td>3000000</td>
        <td>1 Nov 2021</td>
        <td>
            <img id="1" onclick="remove(this)" alt="delete" src="../asserts/icons/delete-black-18dp.svg">
            <img id="1" alt="edit" onclick="update(this)" src="../asserts/icons/create-black-18dp.svg">
        </td>
    </tr>`
            ;
    document.querySelector('#table-display').innerHTML = innerHtml;

}