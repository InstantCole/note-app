import React from 'react'

const TagsList = ({noteTags}) => {
    const tagsList = noteTags.map(tag => <h4><span style={{ color: "var(--main-color)" }}>#</span>{tag}</h4>)

    return(
        <div className="tags-list">
                    {tagsList}
                </div>
    )
}

export default TagsList