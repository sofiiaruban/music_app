
import useFetchData from "../UseFetchData";
import { renderHook } from "@testing-library/react-hooks";

test ('should test', () => {
    const { result } = renderHook(() => useFetchData());
    
    expect(typeof result.current.musicData).toBe('object');
});