import { Component } from '@angular/core';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.html',
  styles: [`
    .book-title {
      text-align: center;
      margin: 25px 0 0 0 ;
    }

    .list {
      white-space: pre-line;
    }
  `]
})
export class BookListComponent {

  chatbooks = `
  1. Fox Love (The Alfred Gustav Press, 2016).
  2. Where the days and nights are equal length (M. C International, 2014) ISBN 9780993676925.
  3. Maya: Poems for the Summer Solstice (Leaf Press, 2014).
  4.Apples and Mice (Alfred Gustav Press, 2008.) ISBN 978-0-9811327-0-9
  5. Stories of Snow, a ‘holm’ or short chapbook (The Alfred Gustav Press, 2011).
  6.At the End of the Garden (Green Publications, 1990.) IBSN: 0-9691555-7-3.
`


  anthologies = `
1. Resilience: a poetic response to sexual assault ed. Sue Goyette (University of Regina Press, upcoming).

2 Heartwood: For the Love of Trees, ed. Lesley Strutt (League of Canadian Poets, 2018). ISBN 978-1-896216-51-5

3. Line Dance, ed. Gerry Hill (Burton House, 2016). ISBN 97809948666912

4.Fire and Sky: A Canadian Anthology of Poem, ed. Jocelyn Verret (Brydge Builder Press, 2016).

5. I Found It At the Movies, ed. Ruth Roach Pierson (Guernica, 2014). ISBN 978-1-55071-897-3

6.  Family Ties: Memories, Poems and Good Food, ed. Kim Grove (Hiddenbrook, 2014). IBSN 978-1-927725-17-7. 

7. The Inspired Heart vol. 3, ed. Melinda Cochrane. M.C. International.2014). ISBN 9780993676949.

8. The Inspired Heart vol.2, ed. Bruce Kauffman.  (M.C International, 2013). ISBN 9781494344627.

9.Fathers and Grandfathers, ed. Donna Goodrich (Hiddenbrook, 2013). ISBN 978-1-927725-07-8.

10. Poet to Poet, ed. Julia Roorda and Elana Wolff (Guernica, 2012). ISBN 978-1-5507-645-0.

11. That Not Forgotten, ed. Bruce Kauffman (Hiddenbrook, 2012). ISBN 978-1-897475-89-8.

12 Letting Go: Poems about surviving a loss, ed Hugh MacDonald (Black Moss, 2005). 
IBSN 0-88753-393-0.

13. Land/Space: An Anthology of Speculative Prairie Literature, (Tesseract, 2003). IBSN: 1-895836-92-. (98-100, 184-6).

14. The Common Sky: Poems against the US-led Invasion of Iraq (Threesquare Press, 2003). 	
IBSN: 0-9732578-0-6 (p.140)

15. No Choice but to Trust (Mekler & Deahl, 2000.) IBSN, 1-884206-08-5.

16. Waiting for you to Speak (Mekler & Deahl, 1999). IBSN: 1-884206-05-0.
`;

}
