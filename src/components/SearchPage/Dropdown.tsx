import React, {FC} from 'react';
import {
    Checkbox,
    FormControl,
    InputLabel, ListItemText, MenuItem,
    OutlinedInput,
    Select,
    SelectChangeEvent
} from "@mui/material";
import {useAppDispatch} from "../../hooks/redux";
import {setTitle, setCategories, setStatus, setShowType, setSort} from "../../store/reducers/SearchLineSlice";

interface DropdownProps {
    label: string,
    items: string[][],
    multiple: boolean,
    action: "setTitle" | "setCategories" | "setStatus" | "setShowType" | "setSort"
}

const actions = {
    setTitle: setTitle,
    setSort: setSort,
    setCategories: setCategories,
    setStatus: setStatus,
    setShowType: setShowType,
}

const Dropdown:FC<DropdownProps> = ({label, items, multiple, action}) => {
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 0,
            },
        },
    };

    const [selectedItems, setSelectedItems] = React.useState<string[]>([]);
    const dispatch = useAppDispatch();

    const handleChange = (event: SelectChangeEvent<typeof selectedItems>) => {
        let {
            target: { value },
        } = event;

        setSelectedItems(
            typeof value === 'string' ? value.split(',') : value,
        );

        value = value.toString();

        if (actions[action]) {
            dispatch(actions[action](value));
        }

        console.log(selectedItems);
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel color={"secondary"}>{label}</InputLabel>
                <Select
                    multiple={multiple}
                    value={(!multiple && selectedItems.length === 0) ? [items[0][1]] : selectedItems}
                    onChange={handleChange}
                    input={<OutlinedInput label={label}/>}
                    renderValue={(selected) => {
                        selected = selected.sort();
                        return selected.join(', ')}
                    }
                    MenuProps={MenuProps}
                >
                    {items.map((item) => (
                        <MenuItem key={item[1]} value={item[1]}>
                            {multiple && <Checkbox checked={selectedItems.indexOf(item[1]) > -1} />}
                            {/*<ListItemText primary={item[1]} />*/}
                            {item[1]}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};

export default Dropdown;