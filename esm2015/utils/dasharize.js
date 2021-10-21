export function dasharize(camel) {
    return camel.replace(/[a-z][A-Z]/g, letterLetter => {
        return `${letterLetter[0]}-${letterLetter[1].toLowerCase()}`;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGFyaXplLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctZXZlbnQtcGx1Z2lucy9zcmMvdXRpbHMvZGFzaGFyaXplLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sVUFBVSxTQUFTLENBQUMsS0FBYTtJQUNuQyxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxFQUFFO1FBQy9DLE9BQU8sR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7SUFDakUsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGRhc2hhcml6ZShjYW1lbDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gY2FtZWwucmVwbGFjZSgvW2Etel1bQS1aXS9nLCBsZXR0ZXJMZXR0ZXIgPT4ge1xuICAgICAgICByZXR1cm4gYCR7bGV0dGVyTGV0dGVyWzBdfS0ke2xldHRlckxldHRlclsxXS50b0xvd2VyQ2FzZSgpfWA7XG4gICAgfSk7XG59XG4iXX0=