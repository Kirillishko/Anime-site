import React, {FC} from 'react';
import {
    Checkbox,
    createTheme,
    FormControl,
    InputLabel, ListItemText, MenuItem,
    OutlinedInput,
    Select,
    SelectChangeEvent, Theme,
    ThemeProvider
} from "@mui/material";
import {categoriesTranslateArray} from "../../translate/Translates";

interface DropdownProps {
    label: string,
    items: string[][],
}

const Dropdown:FC<DropdownProps> = ({label, items}) => {
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

    const handleChange = (event: SelectChangeEvent<typeof selectedItems>) => {
        const {
            target: { value },
        } = event;

        setSelectedItems(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel color={"secondary"}>{label}</InputLabel>
                <Select
                    multiple
                    value={selectedItems}
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
                            <Checkbox checked={selectedItems.indexOf(item[1]) > -1} />
                            <ListItemText primary={item[1]} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};

export default Dropdown;