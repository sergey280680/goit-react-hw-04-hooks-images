import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  SearchBar,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from "./Header.styled";

export function Header({ handleFormSubmit, query }) {
  const [imageQuery, setImageQuery] = useState("");

  const handlSubmit = (e) => {
    e.preventDefault();

    if (query === imageQuery) {
      setImageQuery("");
      return;
    }

    if (imageQuery.trim() === "") {
      return toast.error("Fill in the search box", {
        duration: 3000,
        style: {
          backgroundColor: "orange",
          marginTop: 50,
        },
      });
    }

    handleFormSubmit(imageQuery);
    setImageQuery("");
  };

  const handleNameChange = (event) => {
    setImageQuery(event.currentTarget.value.toLowerCase());
  };

  return (
    <SearchBar>
      <SearchForm onSubmit={handlSubmit}>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autocomplete="off"
          value={imageQuery}
          onChange={handleNameChange}
          // autofocus
          placeholder="Search images and photos"
        />
      </SearchForm>
      <Toaster />
    </SearchBar>
  );
}

// ===================
// ===================
// ===================
// //
// export class Header extends Component {
//   state = {
//     imageQuery: "",
//   };

//   handleNameChange = (event) => {
//     this.setState({ imageQuery: event.currentTarget.value.toLowerCase() });
//   };

//   handlSubmit = (event) => {
//     event.preventDefault();
//     if (this.state.imageQuery.trim() === "") {
//       return toast.error("Fill in the search box", {
//         duration: 3000,
//         style: {
//           backgroundColor: "orange",
//           marginTop: 50,
//         },
//       });
//     }

//     this.props.handleFormSubmit(this.state.imageQuery);
//     this.setState({ imageQuery: "" });
//   };

//   render() {
//     return (
//       <SearchBar>
//         <SearchForm onSubmit={this.handlSubmit}>
//           <SearchFormButton type="submit">
//             <SearchFormButtonLabel>Search</SearchFormButtonLabel>
//           </SearchFormButton>

//           <SearchFormInput
//             type="text"
//             autocomplete="off"
//             value={this.state.imageQuery}
//             onChange={this.handleNameChange}
//             // autofocus
//             placeholder="Search images and photos"
//           />
//         </SearchForm>
//         <Toaster />
//       </SearchBar>
//     );
//   }
// }
