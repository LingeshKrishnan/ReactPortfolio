import React from 'react'
import Latest_Cover from '../Images/CoverLetter_LingeshwaranKrishnan.pdf'

function Coverleter() {
    return (
        <div>
            <object width="100%" height="800" data={Latest_Cover} type="application/pdf"></object>
        </div>
    )
}

export default Coverleter
