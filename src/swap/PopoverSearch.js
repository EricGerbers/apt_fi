import { useState } from "react"

export const PopoverSearch = ({onSelect}) => {
  const [keyword, setKeyword] = useState('')

  const renderContent = (onClose) => {
    return (
      <div
        className='popover-swap-content'
        onClick={() => {
          // onDelete()
          onClose()
        }}
      >

      </div>
    )
  }
  return (
    <div className="swap-search">          
      <Popover
        placement='bottom'
        onVisibleChange={setVisible}
        visible={visible}
        content={onClose => (
          <Popover.Content
            onClose={onClose}
            className='popover-swap-search'
          >
           {renderContent(onClose)}
          </Popover.Content>
        )}
      >
      <Input
        prefixIcon={<i class="bi bi-search"></i>}
        placeholder='You can try “10 USDC to RIN”'
        onChange={(e) => {
          setKeyword(e.target.value)
        }}
        value={keyword}
      />
      </Popover>
    </div>
  )
}